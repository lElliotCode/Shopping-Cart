import { useState, useEffect } from "react"
import axios from "axios"

export function useProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(function (response) {
                // handle success
                const data = response.data
                setProducts(data)
            })
            .catch(function (error) {
                console.log(error);
            })

    }, [])

    return { products, setProducts }
}