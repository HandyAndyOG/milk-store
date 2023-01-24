import React, { useContext, useEffect } from 'react'
import { MilkContext } from '../context/MilkContext';
import Paginations from './Paginations';
import Milk from '../assets/media/milk.png'

const Card = () => {
  const { allMilk } = useContext(MilkContext)

  return (
    <>
      <section>
        {allMilk.length !== 0 ? allMilk.map((milk) => {return (
          <article key={milk.id}>
            <h2>{milk.name}</h2>
            <img src={Milk}/>
            <p>{milk.type}</p>
            <p>{milk.storage}</p>
          </article>
        )}) : 'Loading...'}
      </section>
      <Paginations />
    </>
  )
}

export default Card