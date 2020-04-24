import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "../productType/ProductTypeProvider"
import Product from "./Product"
import "./Product.css"

export default () => {
    const { products } = useContext(ProductContext)
    const { productTypes } = useContext(ProductTypeContext)
   

   return (
   <>
    { products.map(product => {
        const productInfo = productTypes.find(p => p.id === product.productTypeId)
        
        return <Product key={product.id}
                 productType={productInfo}
                 product={product} />
    })}
    </>)
}