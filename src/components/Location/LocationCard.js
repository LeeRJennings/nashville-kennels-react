import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({location, handleDeleteLocation}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
        <Link to={`/locations/${location.id}`}>
            <button>I need da deets</button>
        </Link>
        <br/>
        <Link to={`/locations/${location.id}/edit`}>
            <button>Edit</button>
        </Link>
        <br/>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>DESTROY</button>
    </section>
)