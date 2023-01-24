import React, { useContext, useEffect } from 'react'
import { MilkContext } from '../context/MilkContext';
import Card from './Card';

const Home = () => {
    const { setAllMilk, setPages, currentPage  } = useContext(MilkContext)

    useEffect(() =>{
        const fetchMilk = async () => {
            try {
                const data = await fetch(`http://localhost:8080/api/${currentPage}`);
                const response = await data.json();
                setAllMilk(response[0].results)
                setPages(response[0].count/9)
            } catch (err) {
                console.log(err)
            }
        }
        fetchMilk();
    },[currentPage])


  return (
    <Card />
  )
}

export default Home