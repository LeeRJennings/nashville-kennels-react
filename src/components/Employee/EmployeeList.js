import React, {useEffect, useState} from "react"
import { getAllEmployees } from "../../modules/EmployeeManager"
import { EmployeeCard } from "./EmployeeCard"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    const getEmlpoyees = () => {
        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        })
    }

    useEffect(() => {
        getEmlpoyees();
      }, [])
    
    return (
        <div className="container-cards">
            {employees.map(employee => 
            <EmployeeCard key={employee.id} employee={employee} />
            )}
        </div>
    )
}