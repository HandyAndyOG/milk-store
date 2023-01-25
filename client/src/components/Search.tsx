import { MilkContext } from '../context/MilkContext';
import React, { useContext, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';



const Search = () => {
const { productCount } = useContext(MilkContext)

  return (
    <section className='flex flex-col items-center'>
        <div className='flex flex-row justify-between'>
            <input className='w-72' placeholder='Search'/>
            <p>Filter</p>
        </div>
        <div className='flex flex-col'>
            <h2>{productCount} Products</h2>
        </div>
    </section>
  )
}

export default Search