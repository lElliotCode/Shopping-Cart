import { createContext, useState, ReactNode } from "react";
import { ProductType } from "../types/types.d";

type CartContextType = {
    cart: ProductType[]
    addToCart: (product: ProductType) => void
    removeFromCart: (product: ProductType) => void
    clearCart: () => void
}

export const cartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<ProductType[]>([])

    const addToCart = (product: ProductType) => {

        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)

            if ('quantity' in newCart[productInCartIndex]) {
                if (typeof newCart[productInCartIndex].quantity === 'number') {
                    newCart[productInCartIndex].quantity++;
                }
            }
            setCart(newCart)
        } else {
            setCart(prevState => [
                ...prevState,
                {
                    ...product,
                    quantity: 1
                }
            ])
        }
    }

    const removeFromCart = (product: ProductType) => {

        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            setCart(prevState => prevState.filter(item => item.id != product.id))
        } else {
            setCart(prevState => [
                ...prevState,
                {
                    ...product,
                    quantity: 1
                }
            ])
        }
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <cartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </cartContext.Provider>
    )
}