import React, { useContext, useEffect } from 'react'
import { MilkContext } from '../context/MilkContext';
import Card from './Card';

const Home = () => {
    const { setAllMilk, setPages, currentPage, setProductCount  } = useContext(MilkContext)

    useEffect(() =>{
        const fetchMilk = async () => {
            try {
                const data = await fetch(`http://localhost:8080/api/${currentPage}`);
                const response = await data.json();
                setAllMilk(response[0].results)
                setPages(response[0].count/9)
                setProductCount(response[0].count)
            } catch (err) {
                console.log(err)
            }
        }
        fetchMilk();
    },[currentPage])


  return (
    <>
        <nav className='w-screen h-20 flex justify-center items-center my-4 font-mono'>
            <h1 className='text-5xl text-red-300'>THE MILK STORE</h1>
        </nav>
        <Card />
    </>
  )
}

export default Home