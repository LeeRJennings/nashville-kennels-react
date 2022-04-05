import React from "react"
import "./Kennel.css"
import { AnimalCard } from "./Animal/AnimalCard"
import { CustomerCard } from "./Customer/CustomerCard"
import { EmployeeCard } from "./Employee/Employee"
import { LocationCard } from "./Location/Location"
import { PropsAndState } from "./PropsAndState"

export const Kennel = () => (
    <>
        <PropsAndState yourName="Lee"/>
        
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard/>
            <AnimalCard/>
            <AnimalCard/>
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <LocationCard/>
            <LocationCard/>
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard/>
            <CustomerCard/>
            <CustomerCard/>
            <CustomerCard/>
        </article>
    </>
)