import express from 'express';
import { Request, Response, Application } from 'express';
const MongoClient = require('mongodb').MongoClient;
import * as dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid';

dotenv.config();
const app: Application = express();
const bp = require('body-parser')

const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.cgvcn5o.mongodb.net/${process.env.DB_NAME}`;

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(function(_, res: Response, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

MongoClient.connect(uri, { useUnifiedTopology: true }, (err: string, client: any) => {
  if (err) {
    console.error(err);
    return;
  }
  const db = client.db(process.env.DB_NAME);
  app.get('/api/:page', async (req: Request, res: Response) => {
    if (req.params.page) {
      let startOfArray;
      if(Number(req.params.page) === 1) {
        startOfArray = (Number(req.params.page) * 10) - 9
      } else {
        startOfArray = (Number(req.params.page) * 10) - 9
      }
        try {
          const data = await db.collection(process.env.COLLECTION_NAME).find({}).project({results: { $slice: [startOfArray-Number(req.params.page) , 9] }}).toArray()
          return res.status(200).send(data)
        } catch (err) {
          return res.status(404).send('Error fetching the data')
        }
    }
    return res.status(404).send('Error fetching the page')
  });
});
MongoClient.connect(uri, { useUnifiedTopology: true }, (err: string, client: any) => {
  if (err) {
    console.error(err);
    return;
  }
  const db = client.db(process.env.DB_NAME);

  app.get('/api/search/:search/:page', async (req: Request, res: Response) => {
    const search:any = req.params.search
    const page: any = req.params.page
    const regex = new RegExp(search, 'gmi')

    let startOfArray = (Number(page) * 10) - 9
        try {
          const data = await db.collection(process.env.COLLECTION_NAME).find({}).toArray()
          const filtered = data[0].results.filter((item: any) => item.name.match(regex))
          const filteredCount = filtered.length
          const arrayOfData = filtered.slice(startOfArray - Number(page), startOfArray + 8)
          const newData = [{count: filteredCount}, {results: arrayOfData}]

          return res.status(200).send(newData)
        } catch (err) {
          return res.status(404).send('Error fetching the data')
        }
  });
});




app.get('/api/cart', async (_, res: Response) => {
  const clientId = uuidv4();
  if(clientId) {
    return res.status(200).send({clientId})
  }
  return res.status(404).send('Error creating id')
});


// app.post('/api/', async(req: Request, res: Response) => {

// })

export default app