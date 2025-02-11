import { useContext } from "react"
import { FiltersContext } from "../context/filtersContext"
import { ProductType } from "../types/types.d"

export function useFilters() {
    // const [filters, setFilters] = useState({
    //     category: 'all',
    //     minPrice: 0
    // })

    const context = useContext(FiltersContext)
    if (!context) {
        throw new Error('FiltersContext must be used within a FiltersProvider')
    }
    const { filters, setFilters } = context
    console.log(filters.category)

    const filterProducts = (productsToFilter: ProductType[]) => {
        return productsToFilter.filter(product => {
            return (
                product.price >= filters.minPrice && (
                    filters.category === 'all' || product.category === filters.category
                )
            )
        })
    }

    return { filterProducts, setFilters, filters }
}