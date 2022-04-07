import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./Animal/AnimalList"
import { CustomerList } from "./Customer/CustomerList"
import { EmployeeList } from "./Employee/EmployeeList"
import { LocationList } from "./Location/LocationList"
import { AnimalDetail } from "./Animal/AnimalDetail"
import { LocationDetail } from "./Location/LocationDetail"
import { CustomerDetail } from "./Customer/CustomerDetail"
import { EmployeeDetail } from "./Employee/EmployeeDetail"  

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the home when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={<AnimalList />} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} /> 

                <Route exact path="/customers" element={<CustomerList/>} />
                <Route path="/customers/:customerId" element={<CustomerDetail />} />

                <Route exact path="/employees" element={<EmployeeList/>} />
                <Route path="/employees/:employeeId" element={<EmployeeDetail />} />

                <Route exact path="/locations" element={<LocationList/>} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />
            </Routes>
        </>
    )
}