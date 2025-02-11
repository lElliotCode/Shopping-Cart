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
                        <option value='smartphones'>Smartphones</option>
                        <option value='home-decoration'>Home-Decoration</option>
                        <option value='groceries'>Groceries</option>
                        <option value='skincare'>Skincare</option>
                        <option value='fragrances'>Fragrances</option>
                        <option value='laptops'>Laptops</option>
                    </select>
                </div>
                <div>
                    <label htmlFor={minPriceID}>A partir de: {filters.minPrice}</label>
                    <input
                        type='range'
                        id={minPriceID}
                        min={0}
                        max={1000}
                        onChange={handleMinPriceChange}
                    />
                </div>
            </form>
        </header>
    )
}