import { Filters } from "./Filters"
import { FiltersType } from "../types/types.d"

export function Header({changeFilters}: {changeFilters: (changeFilters: FiltersType) => void}) {

    return (
        <div>
            <h1>E-commerce + Carrito</h1>
            <Filters onChange={changeFilters}/>
        </div>
    )
}