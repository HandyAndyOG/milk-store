export interface Milk {
        name: string,
        type: string,
        storage: number,
        id: string
}
export interface UserCart {
    milk_name: string,
    milk_type: string,
    quantity: number,
    milk_id: string
}
export interface Cart {
        userId: string | undefined
        cart : UserCart[]
}
export interface Options {
    value: string;
    label: string
}
export interface States {
    allMilk: Milk[]
    setAllMilk: React.Dispatch<React.SetStateAction<Milk[]>>
    allData: Milk[]
    setAllData: React.Dispatch<React.SetStateAction<Milk[]>>
    cart: Cart[]
    setCart: React.Dispatch<React.SetStateAction<Cart[]>>
    pages: number
    setPages: React.Dispatch<React.SetStateAction<number>>
    currentPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    productCount: number | null
    setProductCount: React.Dispatch<React.SetStateAction<number | null>>
    volume: number
    setVolume: React.Dispatch<React.SetStateAction<number>>
    clientId: string | undefined
    setClientId: React.Dispatch<React.SetStateAction<string | undefined>>
    search: string | undefined
    setSearch: React.Dispatch<React.SetStateAction<string | undefined>>
    filter: string[]
    setFilter: React.Dispatch<React.SetStateAction<string[]>>
    deletedMilk: boolean
    setDeletedMilk: React.Dispatch<React.SetStateAction<boolean>>
}