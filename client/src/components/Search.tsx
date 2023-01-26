import { MilkContext } from '../context/MilkContext';
import React, { useContext, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import Filter from './Filter'



const Search = () => {
const { productCount, setAllMilk, setPages, setProductCount, setSearch, currentPage} = useContext(MilkContext)

const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e) {
    setSearch(e.target.value);
    const fetchSearch = async () => {
      try {
          const data = await fetch(`http://localhost:8080/api/search/${e.target.value}/${currentPage}`);
          const response = await data.json();
          setAllMilk(response)
          setPages(Math.ceil(response.length/9))
          setProductCount(response.length)
      } catch (err) {
          console.log(err)
      }
  }
  fetchSearch();
  }
}

  return (
    <section className='flex flex-col items-center'>
        <div className='flex flex-row justify-between'>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e)} className='w-72' placeholder='Search'/>
            <Filter />
        </div>
        <div className='flex flex-col'>
            <h2>{productCount} Products</h2>
        </div>
    </section>
  )
}

export default Search