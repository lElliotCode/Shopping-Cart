import { useId } from "react"
import '../styles/filters.css'
import { useFilters } from "../hooks/UseFilters"

export function Filters() {
    const { filters, setFilters } = useFilters()

    const categoryID = useId()
    const minPriceID = useId()

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMinPrice = parseInt(event.target.value)
        setFilters({
            category: filters.category,
            minPrice: newMinPrice
        })
    }

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters({
            category: event.target.value, minPrice: filters.minPrice
        })
    }


    return (
        <header>
            <h2>Filtros</h2>
            <form>
                <div >
                    <label htmlFor={categoryID}>Categoría</label>
                    <select
                        name='category'
                        id={categoryID}
                        onChange={e => handleCategoryChange(e)}
                    >
                        <option value='all'>Todas</option>
                        <option value="men's clothing">Mens clothing</option>
                        <option value='jewelery'>Jewelery</option>
                        <option value='electronics'>Electronics</option>
                        <option value="women's clothing">Womens clothing</option>
                    </select>
                </div>
                <div>
                    <label htmlFor={minPriceID}>A partir de: ${filters.minPrice}</label>
                    <input
                        type='range'
                        id={minPriceID}
                        min={0}
                        max={999}
                        onChange={handleMinPriceChange}
                    />
                </div>
            </form>
        </header>
    )
}