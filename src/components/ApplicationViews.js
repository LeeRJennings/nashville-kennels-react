import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./Animal/AnimalList"
import { CustomerList } from "./Customer/CustomerList"
import { EmployeeList } from "./Employee/EmployeeList"
import { LocationList } from "./Location/LocationList"
import { AnimalDetail } from "./Animal/AnimalDetail"
import { LocationDetail } from "./Location/LocationDetail"
import { CustomerDetail } from "./Customer/CustomerDetail"
import { EmployeeDetail } from "./Employee/EmployeeDetail"
import { AnimalForm } from "./Animal/AnimalForm"
import { CustomerForm } from "./Customer/CustomerForm"
import { EmployeeForm } from "./Employee/EmployeeForm"
import { LocationForm } from "./Location/LocationForm"
import { MadLib } from "./MadLib"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />
    }

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }
    
    return (
        <>
            <Routes>
                {/* Render the home when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />
            
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={
                    <PrivateRoute>
                        <AnimalList />
                    </PrivateRoute>
                } />

                <Route path="/animals/:animalId" element={<AnimalDetail />} />
                <Route path="/animals/create" element={<AnimalForm />} /> 

                <Route exact path="/customers" element={<CustomerList/>} />
                <Route path="/customers/:customerId" element={<CustomerDetail />} />
                <Route path="/customers/create" element={<CustomerForm />} />

                <Route exact path="/employees" element={<EmployeeList/>} />
                <Route path="/employees/:employeeId" element={<EmployeeDetail />} />
                <Route path="/employees/create" element={<EmployeeForm />} />

                <Route exact path="/locations" element={<LocationList/>} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />
                <Route path="/locations/create" element={<LocationForm />} />

                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                
                <Route exact path="/register" element={<Register />} />

                <Route path="/madlib" element={<MadLib />} />
            </Routes>
        </>
    )
}