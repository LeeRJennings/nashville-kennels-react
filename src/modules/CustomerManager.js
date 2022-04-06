const remoteURL = "http://localhost:8088"

// export const getCustomerById = (customerId) => {
//     //be sure your animals have good data and related to a location and customer
//     return fetch(`${remoteURL}/customers/${customerId}`)
//     .then(res => res.json())
//   }

export const getAllCustomers = () => {
  return fetch(`${remoteURL}/customers?_expand=location`)
  .then(res => res.json())
}

export const deleteCustomer = (id) => {
  return fetch(`${remoteURL}/customers/${id}`, {
      method: "DELETE"
  }).then(result => result.json())
}