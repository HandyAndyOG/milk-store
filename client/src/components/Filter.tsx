import { MilkContext } from '../context/MilkContext';
import React, { useContext } from 'react'
import Select, { MultiValue } from 'react-select';
import { Options } from '../Types/types'


const Filter = () => {
const { allData, filter, setFilter } = useContext(MilkContext)
const milkTypes = Array.from(new Set(allData.map(item => item.type)))
const options: Options[] = milkTypes.map((milk) => {
    return {
        value: milk,
        label: milk
    }
})

const handleFilter = (selectedOptions: MultiValue<Options>) => {
    setFilter(selectedOptions.map(options => options.value))
}

  return (
    <Select 
        isMulti
        options={options}
        onChange={handleFilter}
        closeMenuOnSelect={false}
        components={{ DropdownIndicator: () => null }}
    />
  )
}

export default Filter