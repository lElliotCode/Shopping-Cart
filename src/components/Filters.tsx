import { useState, useId } from "react"
import './filters.css'
import { FiltersType } from "../types/types.d"

export function Filters({ onChange }: { onChange: (filters: FiltersType) => void }) {

    const [minPrice, setMinPrice] = useState(0)
    const [category, setCategory] = useState('all')

    const categoryID = useId()
    const minPriceID = useId()

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMinPrice = parseInt(event.target.value)
        setMinPrice(newMinPrice)
        onChange({
            category: category,
            minPrice: newMinPrice
        })
    }

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value)
        onChange({
            category: event.target.value, minPrice: minPrice
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
                    <label htmlFor={minPriceID}>A partir de: {minPrice}</label>
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