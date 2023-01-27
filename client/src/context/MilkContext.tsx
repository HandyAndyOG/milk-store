import React, { createContext, useState } from 'react'
import { States, Milk, Cart, Options } from '../Types/types'

export const MilkContext = createContext<States>({
    allMilk: [],
    setAllMilk: () => {},
    allData: [],
    setAllData: () => {},
    pages: 99,
    setPages: () => {},
    currentPage: 1,
    setCurrentPage: () => {},
    productCount: null,
    setProductCount: () => {},
    volume: 0,
    setVolume: () => {},
    clientId: '',
    setClientId: () => {},
    cart: [], 
    setCart: () => {},
    search: '',
    setSearch: () => {},
    filter: [],
    setFilter: () => {},
    deletedMilk: false,
    setDeletedMilk: () => {}
})

const MilkProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const [ allMilk, setAllMilk ] = useState<Milk[]>([])
    const [ allData, setAllData ] = useState<Milk[]>([])
    const [pages, setPages] = useState<number>(99)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [productCount, setProductCount] = useState<number | null>(null)
    const [volume, setVolume] = useState<number>(0)
    const [clientId, setClientId] = useState<string | undefined>()
    const [cart, setCart] = useState<Cart[]>([])
    const [search, setSearch] = useState<string | undefined>()
    const [filter, setFilter] = useState<string[]>([])
    const [deletedMilk, setDeletedMilk] = useState<boolean>(false)

    return (
        <MilkContext.Provider value = {{ allMilk, setAllMilk, pages, setPages, currentPage, setCurrentPage, productCount, setProductCount, volume, setVolume, clientId, setClientId, cart, setCart, search, setSearch, allData, setAllData, filter, setFilter, deletedMilk, setDeletedMilk}}>
            { children }
        </MilkContext.Provider>
    )
}

export default MilkProvider