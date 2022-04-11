import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateCustomer, getCustomerById } from "../../modules/CustomerManager";
import { getAllLocations } from "../../modules/LocationManager";
import "./CustomerForm.css"

export const CustomerEditForm = () => {
    const [customer, setCustomer] = useState({ name: "", address: ""})
    const [isLoading, setIsLoading] = useState(false)
    const [locations, setLocations] = useState ([])

    const {customerId} = useParams()
    const navigate = useNavigate()

    const handleFieldChange = (event) => {
        const stateToChange = {...customer}
        stateToChange[event.target.id] = event.target.value
        setCustomer(stateToChange)
    }

    const updateExistingCustomer = (event) => {
        event.preventDefault()
        setIsLoading(true)
        const editedCustomer = {
            id: customerId,
            name: customer.name,
            address: customer.address,
            locationId: customer.locationId
        }
        updateCustomer(editedCustomer)
        .then(() => navigate("/customers"))
    }

    useEffect(() => {
        getCustomerById(customerId)
        .then(customer => {
            setCustomer(customer)
        })
        setIsLoading(false)
    }, [customerId])

    useEffect(() => {
        getAllLocations()
        .then(locations => {
            setLocations(locations)
        })
        setIsLoading(false)
    }, [])

    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="name">Customer name</label>
              <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={customer.name}
              />
              <label htmlFor="address">address</label>
              <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={customer.address}
              />
            </div>
            <fieldset>
              <div className="form-group">
                <label htmlFor="location">Assign to location: </label>
                <select value={customer.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
                  <option hidden disabled value="0">Select a location</option>
                  {locations.map(l => (
                  <option key={l.id} value={l.id}>
                  {l.name}
                  </option>
                  ))}
                </select>
              </div>
            </fieldset>
            <div className="alignRight">
              <button
              type="button" disabled={isLoading}
              onClick={updateExistingCustomer}
              className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    )
}