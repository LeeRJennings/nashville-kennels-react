import React, { useState, useEffect } from "react";
import { getAnimalById } from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";

export const AnimalSpotlight = ({animalId}) => {
    const [animal, setAnimal] = useState({})

    useEffect(() => {
        getAnimalById(animalId)
        .then(animal => {
            setAnimal(animal)
        })
    }, [animalId])

    return (
        <div className="animal-spotlight">
            <div>
                <h3>{animal.name}</h3>
                <p>{animal.breed}</p>
                <p>Owner: {animal.customer?.name}</p>
            </div>
      </div>  
    )
}