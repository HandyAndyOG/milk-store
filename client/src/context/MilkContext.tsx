import React, { createContext, useState } from 'react'
import { States, Milk } from '../Types/types'

export const MilkContext = createContext<States>({
    allMilk: [],
    setAllMilk: () => {},
    pages: 99,
    setPages: () => {},
    currentPage: 1,
    setCurrentPage: () => {}
})

const MilkProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const [ allMilk, setAllMilk ] = useState<Milk[]>([])
    const [pages, setPages] = useState<number>(99)
    const [currentPage, setCurrentPage] = useState<number>(1)

    return (
        <MilkContext.Provider value = {{ allMilk, setAllMilk, pages, setPages, currentPage, setCurrentPage }}>
            { children }
        </MilkContext.Provider>
    )
}

export default MilkProvider