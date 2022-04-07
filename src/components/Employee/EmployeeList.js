import React, {useEffect, useState} from "react"
import { getAllEmployees, deleteEmployee } from "../../modules/EmployeeManager"
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

    const handleDeleteEmployee = (id) => {
        deleteEmployee(id)
        .then(() => getAllEmployees().then((res) => setEmployees(res)))
    }
    
    return (
        <div className="container-cards">
            {employees.map(employee => 
            <EmployeeCard 
                key={employee.id} 
                employee={employee}
                handleDeleteEmployee={handleDeleteEmployee} />
            )}
        </div>
    )
}