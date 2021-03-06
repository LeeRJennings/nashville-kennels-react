import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../../modules/EmployeeManager';
import { getAllLocations } from '../../modules/LocationManager';
import "./EmployeeForm.css"

export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({ 
        name: "",
        locationId: 0
    })

    const [isLoading, setIsLoading] = useState(true)
    const [locations, setLocations] = useState([])

    const navigate = useNavigate()

    const handleControlledInputChange = (event) => {
        const newEmployee = {...employee}
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newEmployee[event.target.id] = selectedVal
        setEmployee(newEmployee)
    }

    useEffect(() => {
        getAllLocations()
        .then(locations => {
            setLocations(locations)
        })
        setIsLoading(false)
    }, [locations])

    const handleClickSaveEmployee = (event) => {
        event.preventDefault()
        if (employee.name === "" || employee.locationId === 0) {
            window.alert("Duuuuuuude, it's just 2 fields to fill in this time. Do it!")
        } else {
            setIsLoading(true)
            addEmployee(employee)
            .then(() => navigate("/employees"))
        }
    }

    return (
		<form className="employeeForm">
			<h2 className="employeeForm__title">New Employee</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Employee name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option hidden disabled value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button 
                type="button" 
                className="btn btn-primary"
                disabled={isLoading}
				onClick={handleClickSaveEmployee}
                >
				Save Employee
          </button>
		</form>
	)
}