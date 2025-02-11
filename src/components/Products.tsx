import '../styles/products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { ProductType } from '../types/types.d'
import { useCart } from '../hooks/useCart'

export function Products({ products }: { products: ProductType[] }) {

    const { addToCart, removeFromCart, cart } = useCart()


    const checkProductInCart = (product: ProductType) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <h1>Productos</h1>
            <ul>
                {products.length > 0 ? products.map(product => {
                    const isProductInCart = checkProductInCart(product)

                    return (
                        <li key={product.id}>
                            <div className='h2-div'>
                                <h2>{product.title}</h2>
                            </div>
                            <div className='img-div'>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className='p-div'>
                                <p>{product.description.slice(0, 100)}...</p>
                            </div>
                            <div>
                                <h4>{product.category}</h4>
                                <span>${product.price}</span>
                            </div>
                            {
                                isProductInCart
                                    ?
                                    <div className='btn-div'>
                                        <button style={{ backgroundColor: 'red' }} onClick={() => removeFromCart(product)}>
                                            <RemoveFromCartIcon />
                                        </button>
                                    </div>
                                    :
                                    <div className='btn-div'>
                                        <button style={{ backgroundColor: 'rgb(39, 146, 195)' }} onClick={() => addToCart(product)}>
                                            <AddToCartIcon />
                                        </button>
                                    </div>

                            }
                        </li>
                    )
                }) :
                    <h2>No hay productos que cumplan la condición</h2>
                }
            </ul>
        </main>
    )
}