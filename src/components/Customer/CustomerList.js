import React, { useEffect, useState } from "react"
import { getAllCustomers, deleteCustomer } from "../../modules/CustomerManager"
import { CustomerCard } from "./CustomerCard"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI)
        })
    }

    useEffect(() => {
        getCustomers()
    }, [])

    const handleDeleteCustomer = (id) => {
        deleteCustomer(id)
        .then(() => getAllCustomers().then((res) => setCustomers(res)))
    }

    return (
        <div className="container-cards">
            {customers.map(customer => 
            <CustomerCard 
                key={customer.id} 
                customer={customer}
                handleDeleteCustomer={handleDeleteCustomer} />
            )}
        </div>
    )
}