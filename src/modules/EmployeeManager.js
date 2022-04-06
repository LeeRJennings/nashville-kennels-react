const remoteURL = "http://localhost:8088"

export const getEmployeeById = (employeeId) => {
  //be sure your Employees have good data and related to a location and customer
  return fetch(`${remoteURL}/Employees/${employeeId}?_expand=location`)
  .then(res => res.json())
}

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees?_expand=location`)
  .then(res => res.json())
}