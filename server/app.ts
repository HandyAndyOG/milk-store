import express from 'express';
import { Request, Response, Application } from 'express';
const MongoClient = require('mongodb').MongoClient;
import * as dotenv from 'dotenv'
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

// interface Data {
//   _id: string;
//   count: number;
//   results: string[];
// }


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
          console.log(startOfArray)
          const data = await db.collection(process.env.COLLECTION_NAME).find({}).project({results: { $slice: [startOfArray-Number(req.params.page) , 9] }}).toArray()
          console.log(data)
          return res.status(200).send(data)
        } catch (err) {
          return res.status(404).send('Error fetching the data')
        }
    }
    return res.status(404).send('Error fetching the page')
  });
});

// app.post('/api/', async(req: Request, res: Response) => {

// })

export default app