import { MilkContext } from '../context/MilkContext';
import React, { useContext, useEffect } from 'react'

const Filter = () => {
const { allData } = useContext(MilkContext)
const milkTypes = Array.from(new Set(allData.map(item => item.type)))

const handleFilter = () => {

}
  return (
    <select onChange={handleFilter}>
        {milkTypes.map((milk) => (<option value={milk}>{milk}<input type='checkbox' value={milk} onChange={handleFilter} /></option>))}
    </select>
  )
}

export default Filter