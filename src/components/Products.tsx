import './products.css'
import { AddToCartIcon } from './Icons'
import { ProductType } from '../types/types.d'

export function Products({ products }:{ products: ProductType[] }) {
    
    return (
        <main className='products'>
            <h1>Productos</h1>
            <ul>
                {products.length > 0 ? products.map(product => (
                    <li key={product.id}>
                        <div>
                            <p>{product.description}</p>
                        </div>
                        <div>
                            <h2>{product.title}</h2>
                        </div>
                        <div>
                            <h4>{product.category}</h4>
                            <span>${product.price}</span>
                        </div>
                        <button>
                            <AddToCartIcon />
                        </button>
                    </li>
                )) :
                    <h2>No hay productos que cumplan la condición</h2>
            }
            </ul>
        </main>
    )
}