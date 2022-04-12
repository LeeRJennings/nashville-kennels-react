import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLocationById, updateLocation } from "../../modules/LocationManager";
import "./LocationForm.css"

export const LocationEditForm = () => {
    const [location, setLocation] = useState({ name: "", address: "" })
    const [isLoading, setIsLoading] = useState(false)

    const {locationId} = useParams()
    const navigate = useNavigate()

    const handleFieldChange = (event) => {
        const stateToChange = {...location}
        stateToChange[event.target.id] = event.target.value
        setLocation(stateToChange)
    }

    const updateExistingLocation = (event) => {
        event.preventDefault()
        setIsLoading(true)
        const editedLocation = {
            id: locationId,
            name: location.name,
            address: location.address
        }
        updateLocation(editedLocation)
        .then(() => navigate("/locations"))
    }

    useEffect(() => {
        getLocationById(locationId)
        .then(location => {
            setLocation(location)
        })
        setIsLoading(false)
    }, [locationId])

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="name">Location name</label>
                        <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="name"
                        value={location.name}
                        />
                        <label htmlFor="address">address</label>
                        <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="address"
                        value={location.address}
                        />
                    </div>
                    <div className="alignRight">
                        <button
                        type="button" disabled={isLoading}
                        onClick={updateExistingLocation}
                        className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}