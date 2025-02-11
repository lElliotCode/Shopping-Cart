import { CartItemType } from "../types/types.d"

export function CartItem({ image, title, price, quantity, addToCart }: CartItemType) {
    return (
        <li id="">
            <img src={image} alt={title} />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>
                    +
                </button>
            </footer>
        </li>
    )
}
