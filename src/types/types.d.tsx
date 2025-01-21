import { products } from '../mocks/products.json'

export type ProductType = typeof products[0]

export type FiltersType = {
    category: string
    minPrice: number
}