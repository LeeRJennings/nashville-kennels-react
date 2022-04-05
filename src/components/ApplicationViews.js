import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from './Animal/AnimalCard.js'
import { CustomerCard } from './Customer/CustomerCard'
import { EmployeeCard } from "./Employee/EmployeeCard"
import { LocationCard } from "./Location/LocationCard"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the home when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalCard />} />

                <Route path="/customers" element={<CustomerCard/>} />

                <Route path="/employees" element={<EmployeeCard/>} />

                <Route path="/locations" element={<LocationCard/>} />
            </Routes>
        </>
    )
}