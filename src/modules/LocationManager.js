const remoteURL = "http://localhost:8088"

export const getLocationById = (locationId) => {
  //be sure your Locations have good data and related to a location and customer
  return fetch(`${remoteURL}/locations/${locationId}`)
  .then(res => res.json())
}

export const getAllLocations = () => {
  return fetch(`${remoteURL}/locations`)
  .then(res => res.json())
}