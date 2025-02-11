import { products } from '../mocks/products.json'

export type ProductType = typeof products[0]

export type FiltersType = {
    category: string
    minPrice: number
}

export type FiltersContextType = {
    category: string
    minPrice: number
}

export type CartItemType = {
    thumbnail: string
    quantity: number | string
    title: string
    price: number | string
    addToCart: () => void
}