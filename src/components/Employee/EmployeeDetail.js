import React, { useState, useEffect } from "react";
import { deleteEmployee, getEmployeeById } from "../../modules/EmployeeManager";
import './EmployeeDetail.css'
import { useParams, useNavigate } from "react-router-dom";

export const EmployeeDetail = () => {
    const [employee, setEmployee] = useState({ name: "" }) 
    const [isLoading, setIsLoading] = useState(true)

    const {employeeId} = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        getEmployeeById(employeeId)
        .then(employee => {
            setEmployee(employee)
            setIsLoading(false)
        })
    }, [employeeId])

    const handleDelete = () => {
        setIsLoading(true)
        deleteEmployee(employeeId).then(() => 
            navigate("/employees")
        )
    }

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">Location: {employee.location?.name}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Delete
            </button>
        </section>
    )
}