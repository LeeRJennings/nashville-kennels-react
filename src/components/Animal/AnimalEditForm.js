import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import "./AnimalForm.css"
import { getAllLocations } from "../../modules/LocationManager"
import { getAllCustomers } from "../../modules/CustomerManager"

export const AnimalEditForm = () => {
    const [animal, setAnimal] = useState({ name: "", breed: "" })
    const [isLoading, setIsLoading] = useState(false)
    const [locations, setLocations] = useState([])
    const [customers, setCustomers] = useState([])

    const {animalId} = useParams()
    const navigate = useNavigate()

    const handleFieldChange = (event) => {
        const stateToChange = {...animal}
        stateToChange[event.target.id] = event.target.value
        setAnimal(stateToChange)
    }

    const updateExistingAnimal = (event) => {
        event.preventDefault()
        setIsLoading(true)
        const editedAnimal = {
            id:animalId,
            name: animal.name,
            breed: animal.breed,
            locationId: animal.locationId,
            customerId: animal.customerId
        }
        updateAnimal(editedAnimal)
        .then(() => navigate("/animals"))
    }

    useEffect(() => {
        getAnimalById(animalId)
        .then(animal => {
            setAnimal(animal)
            setIsLoading(false)
        })
    }, [animalId])

    useEffect(() => {
        getAllLocations()
        .then(locations => {
            setLocations(locations)
        })
        getAllCustomers()
        .then(customers => {
            setCustomers(customers)
        })
        setIsLoading(false)
    }, [])

    return (
        <>
          <form>
            <fieldset>
              <div className="formgrid">
                <label htmlFor="name">Animal name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="name"
                  value={animal.name}
                />
    
                <label htmlFor="breed">Breed</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="breed"
                  value={animal.breed}
                />
              </div>
              <fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={animal.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
						<option hidden disabled value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="customerId">Assign to customer: </label>
					<select value={animal.customerId} name="customer" id="customerId" onChange={handleFieldChange} className="form-control" >
						<option hidden disabled value="0">Select a customer</option>
						{customers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
              <div className="alignRight">
                <button
                  type="button" disabled={isLoading}
                  onClick={updateExistingAnimal}
                  className="btn btn-primary"
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
      )
 }