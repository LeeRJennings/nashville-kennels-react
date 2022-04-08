import React, { useEffect, useState } from "react"
import { getAllLocations, deleteLocation } from "../../modules/LocationManager"
import { LocationCard } from "./LocationCard"
import { useNavigate } from "react-router-dom"

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    const navigate = useNavigate()
    
    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }

    useEffect(() => {
        getLocations()
    }, [])

    const handleDeleteLocation = (id) => {
        deleteLocation(id)
        .then(() => getAllLocations().then((res) => setLocations(res)))
    }

    return (
        <>
            <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => {navigate("/locations/create")}}
                        >
                            New Location
                    </button>
                </section>
            <div className="container-cards">
                {locations.map(location => 
                <LocationCard 
                    key={location.id} 
                    location={location}
                    handleDeleteLocation={handleDeleteLocation} />
                )}
            </div>
        </>
    )
}