import { createContext, useReducer, ReactNode } from "react";
import { ProductType } from "../types/types.d";

type CartContextType = {
    cart: ProductType[]
    addToCart: (product: ProductType) => void
    removeFromCart: (product: ProductType) => void
    clearCart: () => void
}

export const cartContext = createContext<CartContextType | undefined>(undefined)

// Definimos el tipo del estado del carrito, en este un array de tipo productos[]
type CartState = ProductType[]

//Definimos los tipos de las acciones del reducer

type CartActions =
    | { type: "ADD_TO_CART"; payload: ProductType }
    | { type: "REMOVE_FROM_CART"; payload: { id: number } }
    | { type: "CLEAR_CART" }

const initialState: CartState = []

const reducer = (state: CartState, action: CartActions) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const { id } = action.payload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)

                if ('quantity' in newState[productInCartIndex]) {
                    if (typeof newState[productInCartIndex].quantity === 'number') {
                        newState[productInCartIndex].quantity++;
                    }
                }
                return newState
            }
            return [
                ...state,
                {
                    ...action.payload,
                    quantity: 1
                }
            ]

        }

        case 'REMOVE_FROM_CART': {
            const { id } = action.payload
            console.log(action.payload)
            return state.filter(item => item.id != id)
            
        }

        case 'CLEAR_CART': {
            return initialState
        }
    }
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, dispatch] = useReducer(reducer, initialState)

    const addToCart = (product: ProductType) => {
        dispatch({ type: 'ADD_TO_CART', payload: product })
    }

    const removeFromCart = (product: ProductType) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
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