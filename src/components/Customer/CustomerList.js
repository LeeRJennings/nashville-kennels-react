import React, { useEffect, useState } from "react"
import { getAllCustomers, deleteCustomer } from "../../modules/CustomerManager"
import { CustomerCard } from "./CustomerCard"
import { useNavigate } from "react-router-dom"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    const navigate = useNavigate()

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
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {navigate("/customers/create")}}
                    >
                        New Customer
                </button>
            </section>
            <div className="container-cards">
                {customers.map(customer => 
                <CustomerCard 
                    key={customer.id} 
                    customer={customer}
                    handleDeleteCustomer={handleDeleteCustomer} />
                )}
            </div>
        </>
    )
}