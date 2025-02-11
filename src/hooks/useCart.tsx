import { useContext } from "react"
import { cartContext } from "../context/cartContext"

export const useCart = () => {
    const context = useContext(cartContext)

    if (!context) {
        throw new Error('CartContext must be used within a CartProvider')
    }

    return context
}