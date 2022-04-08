import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addAnimal } from '../../modules/AnimalManager';
import './AnimalForm.css'
import { getAllLocations } from '../../modules/LocationManager';
import { getAllCustomers } from '../../modules/CustomerManager';

export const AnimalForm = () => {
    const [animal, setAnimal] = useState({
        name: "",
        breed: "",
        locationId: 0,
        customerId: 0
    })

    const [isLoading, setIsLoading] = useState(true)
    const [locations, setLocations] = useState([])
    const [customers, setCustomers] = useState([])

    const navigate = useNavigate()

    const handleControlledInputChange = (event) => {
        const newAnimal = { ...animal }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newAnimal[event.target.id] = selectedVal
        setAnimal(newAnimal)
    }
    
    // useEffect(() => {
    //     getAllLocations()
    //     .then(locations => {
    //         setLocations(locations)
    //         setIsLoading(false)
    //     })
    // }, [locations])
    
    // useEffect(() => {
    //     getAllCustomers()
    //     .then(customers => {
    //         setCustomers(customers)
    //         setIsLoading(false)
    //     })
    // }, [customers])

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


    const handleClickSaveAnimal = (event) => {
        event.preventDefault()

        if (animal.name === "" || animal.breed === "" || animal.locationId === 0 || animal.customerId === 0) {
            window.alert("Bruh, you're not done. Fill the rest of the info out. Ya heard?")
        } else {
            setIsLoading(true)
            addAnimal(animal)
            .then(() => navigate("/animals"))
        }
    }

    return (
		<form className="animalForm">
			<h2 className="animalForm__title">New Animal</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Animal name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="breed">Animal breed:</label>
					<input type="text" id="breed" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
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
					<select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
						<option hidden disabled value="0">Select a customer</option>
						{customers.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button 
                type="button" 
                className="btn btn-primary"
                disabled={isLoading}
				onClick={handleClickSaveAnimal}
                >
				Save Animal
          </button>
		</form>
	)
}