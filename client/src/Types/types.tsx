export interface Milk {
        name: string,
        type: string,
        storage: number,
        id: string
}
export interface States {
    allMilk: Milk[]
    setAllMilk: React.Dispatch<React.SetStateAction<Milk[]>>
    pages: number
    setPages: React.Dispatch<React.SetStateAction<number>>
    currentPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    productCount: number | null
    setProductCount: React.Dispatch<React.SetStateAction<number | null>>
}