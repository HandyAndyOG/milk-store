import React, { useContext, useEffect } from 'react'
import { MilkContext } from '../context/MilkContext';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const Paginations = () => {
  const { pages, currentPage, setCurrentPage } = useContext(MilkContext)

  const prevPage = () => {
    if(currentPage > 1) {
        setCurrentPage(currentPage - 1)
    } 
    return
  }

  const nextPage = () => {
    if (currentPage < pages) {
        setCurrentPage(currentPage + 1)
    }
    return
  }
  
  return (
    <div>
        <button onClick={prevPage}><IoIosArrowBack/></button>
        <button>{currentPage}</button>
        <span>of</span>
        <button onClick={() => setCurrentPage(pages)}>{pages}</button>
        <button onClick={nextPage}><IoIosArrowForward/></button>
    </div>
  )
}

export default Paginations