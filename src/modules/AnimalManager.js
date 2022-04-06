const remoteURL = "http://localhost:8088"

// export const getAnimalById = () => {
//     return fetch(`${remoteURL}/animals/${animalId}?_expand=location&_expand=customer`)
//     .then(res => res.json())
// }

export const getAllAnimals = () => {
    return fetch(`${remoteURL}/animals?_expand=location&_expand=customer`)
    .then(res => res.json())
}

export const deleteAnimal = (id) => {
    return fetch(`${remoteURL}/animals/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}