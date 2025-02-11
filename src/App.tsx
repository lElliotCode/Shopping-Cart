// import { useState } from 'react'
import './App.css'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config.ts'
import { useFilters } from './hooks/UseFilters'
import { Cart } from './components/Cart.tsx'
import { CartProvider } from './context/cartContext.tsx'

function App() {

  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (

    <>
      <Header />
      <CartProvider>
        <Cart />
        <Products products={filteredProducts} />

        {
          IS_DEVELOPMENT && <Footer />
        }

      </CartProvider>
    </>
  )
}

export default App
