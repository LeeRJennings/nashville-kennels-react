import React, {useEffect, useState} from "react"
import { getAllEmployees, deleteEmployee } from "../../modules/EmployeeManager"
import { EmployeeCard } from "./EmployeeCard"
import { useNavigate } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    const navigate = useNavigate()

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
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {navigate("/employees/create")}}
                    >
                        New Employee
                </button>
            </section>
            <div className="container-cards">
                {employees.map(employee => 
                <EmployeeCard 
                    key={employee.id} 
                    employee={employee}
                    handleDeleteEmployee={handleDeleteEmployee} />
                )}
            </div>
        </>
    )
}