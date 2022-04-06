import React, { useEffect, useState } from "react"
import { getAllLocations } from "../../modules/LocationManager"
import { LocationCard } from "./LocationCard"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    
    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="container-cards">
            {locations.map(location => 
            <LocationCard key={location.id} location={location} />
            )}
        </div>
    )
}