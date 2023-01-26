import React, { createContext, useState } from 'react'
import { States, Milk, Cart } from '../Types/types'

export const MilkContext = createContext<States>({
    allMilk: [],
    setAllMilk: () => {},
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
    setSearch: () => {}
})

const MilkProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const [ allMilk, setAllMilk ] = useState<Milk[]>([])
    const [pages, setPages] = useState<number>(99)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [productCount, setProductCount] = useState<number | null>(null)
    const [volume, setVolume] = useState<number>(0)
    const [clientId, setClientId] = useState<string | undefined>()
    const [cart, setCart] = useState<Cart[]>([])
    const [search, setSearch] = useState<string | undefined>()

    return (
        <MilkContext.Provider value = {{ allMilk, setAllMilk, pages, setPages, currentPage, setCurrentPage, productCount, setProductCount, volume, setVolume, clientId, setClientId, cart, setCart, search, setSearch }}>
            { children }
        </MilkContext.Provider>
    )
}

export default MilkProvider