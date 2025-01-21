// import { useState } from 'react'
import './App.css'
import { useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { ProductType } from './types/types.d'
import { Header } from './components/Header'

function App() {
  
  const [products] = useState(initialProducts)

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (productsToFilter: ProductType[]) => {
    return productsToFilter.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' || product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)
  
  return (
    
    <>
        <Header changeFilters={setFilters}/>
        <Products products={filteredProducts}/>
      
    </>
  )
}

export default App
