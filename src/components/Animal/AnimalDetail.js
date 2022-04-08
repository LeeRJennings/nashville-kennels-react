import React, { useState, useEffect } from "react";
import { deleteAnimal, getAnimalById } from "../../modules/AnimalManager";
import './AnimalDetail.css'
import { useParams, useNavigate } from "react-router-dom";

export const AnimalDetail = () => {
    const [animal, setAnimal] = useState({ name: "", breed: "" })
    const [isLoading, setIsLoading] = useState(true)

    const {animalId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
       getAnimalById(animalId)
        .then(animal => {
            setAnimal(animal)
            setIsLoading(false)
        })
    }, [animalId])

    const handleDelete = () => {
        setIsLoading(true)
        deleteAnimal(animalId).then(() => 
            navigate("/animals")
        )
    }

    return (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__location">Location: {animal.location?.name}</div>
        <div className="animal__owner">Owner: {animal.customer?.name}</div>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
            Discharge
        </button>
    </section>  
    )
}