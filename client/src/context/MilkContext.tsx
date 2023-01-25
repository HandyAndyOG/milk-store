import React, { createContext, useState } from 'react'
import { States, Milk } from '../Types/types'

export const MilkContext = createContext<States>({
    allMilk: [],
    setAllMilk: () => {},
    pages: 99,
    setPages: () => {},
    currentPage: 1,
    setCurrentPage: () => {},
    productCount: null,
    setProductCount: () => {}
})

const MilkProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const [ allMilk, setAllMilk ] = useState<Milk[]>([])
    const [pages, setPages] = useState<number>(99)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [productCount, setProductCount] = useState<number | null>(null)

    return (
        <MilkContext.Provider value = {{ allMilk, setAllMilk, pages, setPages, currentPage, setCurrentPage, productCount, setProductCount }}>
            { children }
        </MilkContext.Provider>
    )
}

export default MilkProvider