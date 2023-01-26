import React, { useContext, useEffect } from 'react'
import { MilkContext } from '../context/MilkContext';
import Card from './Card';
import Nav from './Nav'

const Home = () => {
    const { setAllMilk, setPages, currentPage, setProductCount, search, setAllData } = useContext(MilkContext)

    useEffect(() =>{
        const fetchMilk = async () => {
            if (!search) {
                try {
                    const data = await fetch(`http://localhost:8080/api/${currentPage}`);
                    const response = await data.json();
                    setAllMilk(response.data[0].results)
                    setPages(response.data[0].count/9)
                    setProductCount(response.data[0].count)
                    setAllData(response.wholeData[0].results)
                } catch (err) {
                    console.log(err)
                }
            } else {
                const data = await fetch(`http://localhost:8080/api/search/${search}/${currentPage}`);
                const response = await data.json();
                setAllMilk(response[1].results)
                setPages(Math.ceil(response[0].count/9))
                setProductCount(response[0].count)
            }
        }
        fetchMilk();
    },[currentPage, search])

  return (
    <>
        <Nav/>
        <Card />
    </>
  )
}

export default Home