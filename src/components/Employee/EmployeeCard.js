import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeCard = ({employee, handleDeleteEmployee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">{employee.location.name}</div>
        <Link to={`/employees/${employee.id}`}>
            <button>D-Tails</button>
        </Link>
        <br/>
        <Link to={`/employees/${employee.id}/edit`}>
            <button>Edit</button>
        </Link>
        <br/>
        <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>TERMINATE</button>
    </section>
)