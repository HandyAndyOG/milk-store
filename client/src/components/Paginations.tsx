import React, { useContext, useEffect } from 'react'
import { MilkContext } from '../context/MilkContext';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';


const Paginations = () => {
  const { pages, currentPage, setCurrentPage } = useContext(MilkContext)
  const paginationArray = Array.from({length: pages}, (_, i) => i + 1)
  console.log(currentPage)

  const prevPage = () => {
    if(currentPage > 1) {
        setCurrentPage(currentPage - 1)
    } 
    return
  }

  const nextPage = () => {
    if (currentPage < paginationArray.length) {
        setCurrentPage(currentPage + 1)
    }
    return
  }
  return (
    <div>
        <button><BiLeftArrow onClick={prevPage}/></button>{paginationArray.map((n: number) => <button onClick={() => setCurrentPage(n)} key={n}>{n}</button>)}<button onClick={nextPage}><BiRightArrow/></button>
    </div>
  )
}

export default Paginations