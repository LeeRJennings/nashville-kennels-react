import React, { useState, useEffect } from "react"
import { getCustomerById } from "../../modules/CustomerManager"
import './CustomerDetail.css'
import { useParams, useNavigate } from "react-router-dom"

export const CustomerDetail = () => {
    const [customer, setCustomer] = useState({ name: "", address: "" })

    const {customerId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getCustomerById(customerId)
        .then(customer => {
            setCustomer(customer)
        })
    }, [customerId])

    return (
        <section className="customer">
            <h3 className="customer__name">{customer.name}</h3>
            <div className="customer__address">{customer.address}</div>
            <div className="customer__location">Location: {customer.location?.name}</div>
        </section>
    )
}