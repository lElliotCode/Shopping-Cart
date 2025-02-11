import { CartItemType } from "../types/types.d"

export function CartItem({ title, price, quantity, addToCart }: CartItemType) {
    return (
        <li id="">
            <img src='https://http2.mlstatic.com/D_NQ_NP_975266-MLA52462532580_112022-O.webp' alt={title} />
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
