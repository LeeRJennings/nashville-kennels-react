import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./Animal/AnimalList"
import { CustomerList } from "./Customer/CustomerList"
import { EmployeeList } from "./Employee/EmployeeList"
import { LocationList } from "./Location/LocationList"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the home when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalList />} />

                <Route path="/customers" element={<CustomerList/>} />

                <Route path="/employees" element={<EmployeeList/>} />

                <Route path="/locations" element={<LocationList/>} />
            </Routes>
        </>
    )
}