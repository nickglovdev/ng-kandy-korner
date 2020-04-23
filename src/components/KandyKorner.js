import React from "react"
import LocationList from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./product/ProductProvider"
import ProductList from "./product/ProductList"


export default () => (
    <>
        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <h2>Products</h2>
        <ProductProvider>
            <ProductList />
        </ProductProvider>
    </>
)