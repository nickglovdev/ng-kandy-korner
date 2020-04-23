import React from "react"

export default ( {location}) => (
    <section className="location">
        <h3 className="location__address">Address: {location.address}</h3>
        <div className="location__sqt"></div>
    </section>
) 