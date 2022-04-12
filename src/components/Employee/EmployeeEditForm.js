import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee, getEmployeeById } from "../../modules/EmployeeManager";
import { getAllLocations } from "../../modules/LocationManager";
import "./EmployeeForm.css"

export const EmployeeEditForm = () => {
    const [employee, setEmployee] = useState({ name: ""})
    const [isLoading, setIsLoading] = useState(false)
    const [locations, setLocations] = useState([])

    const {employeeId} = useParams()
    const navigate = useNavigate()

    const handleFieldChange = (event) => {
        const stateToChange = {...employee}
        stateToChange[event.target.id] = event.target.value
        setEmployee(stateToChange)
    }

    const updateExistingEmployee = (event) => {
        event.preventDefault()
        setIsLoading(true)
        const editedEmployee = {
            id: employeeId,
            name: employee.name,
            locationId: employee.locationId
        }
        updateEmployee(editedEmployee)
        .then(() => navigate("/employees"))
    }

    useEffect(() => {
        getEmployeeById(employeeId)
        .then(employee => {
            setEmployee(employee)
        })
        setIsLoading(false)
    }, [employeeId])

    useEffect(() => {
        getAllLocations()
        .then(locations => {
            setLocations(locations)
        })
        setIsLoading(false)
    }, [])

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="name">Employee name</label>
                        <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="name"
                        value={employee.name}
                        />
                    </div>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="location">Assign to location: </label>
                            <select value={employee.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
                                <option hidden disabled value="0">Select a location</option>
                                {locations.map(l => (
                                <option key={l.id} value={l.id}>
                                {l.name}
                                </option>
                                ))}
                            </select>
                        </div>
                    </fieldset>
                        <div className="alignRight">
                            <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingEmployee}
                            className="btn btn-primary"
                            >Submit</button>
                        </div>
                </fieldset>
            </form>
        </>
    )
}