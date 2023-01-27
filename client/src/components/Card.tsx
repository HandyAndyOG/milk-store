import React, { useContext, useEffect } from 'react'
import { MilkContext } from '../context/MilkContext';
import Paginations from './Paginations';
import { useNavigate } from 'react-router-dom';
import Milk from '../assets/media/milk.png'
import Search from '../components/Search'
import { v4 as uuidv4 } from 'uuid';

const Card = () => {
  const { allMilk } = useContext(MilkContext)
  const navigate = useNavigate()

  const navProduct = (id: string) => {
    navigate(`/Milk/${id}`)
  }

  return (
    <>
      <section className='bg-red-100 py-10'>
        <Search />
        <section className='grid grid-rows-3 grid-flow-col gap-12 justify-center'>
          {allMilk.length !== 0 ? allMilk.map((milk) => {return (
            <article onClick={() => navProduct(milk.id)} className='w-72 border-solid border bg-slate-50 rounded-md overflow-hidden' key={milk.id}>
              <div className='bg-slate-100 flex justify-center py-4'>
                <img className='h-24' src={Milk}/>
              </div>
              <div className='flex flex-col p-3'>
                <h2 className='font-medium text-left'>{milk.name}</h2>
                <div className='flex flex-row text-gray-500 justify-between mt-5'>
                  <p>{milk.type}</p>
                  <p>{milk.storage} liter</p>
                </div>
              </div>
            </article>
          )}) : 'Loading...'}
        </section>
      </section>
      <Paginations />
    </>
  )
}

export default Card