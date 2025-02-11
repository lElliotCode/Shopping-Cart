import { ClearCartIcon, CartIcon } from "./Icons"
import '../styles/cart.css'
import { useId } from 'react'
import { useCart } from "../hooks/useCart"
import { CartItem } from "./CartItem"

export function Cart() {

    const { clearCart, addToCart, cart } = useCart()

    const cartCheckboxId = useId()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className="cart">
                <ul>
                    {
                        cart.map(product => {
                            return (
                                <CartItem
                                    quantity={""}
                                    key={product.id}
                                    {...product}
                                    addToCart={() => addToCart(product)}
                                />
                            )
                        })
                    }
                </ul>

                <button onClick={() => clearCart()}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}