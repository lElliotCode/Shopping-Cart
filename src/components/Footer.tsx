import '../styles/footer.css'
import { useFilters } from '../hooks/UseFilters'
//import { useCart } from '../hooks/useCart'


export function Footer () {

const { filters } = useFilters()
// const { cart } = useCart()

    return (
        <footer>
            <div>
            {
                JSON.stringify(filters, null, 2)
            }
            {/* {
                JSON.stringify(cart, null, 2)
            } */}
            </div>
        </footer>
    )
}