import React from "react"
import LocationList from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"


export default () => (
    <>
        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)