import React, { useEffect, useState } from "react";
import { getAllAnimals, deleteAnimal } from "../../modules/AnimalManager";
import { AnimalCard } from "./AnimalCard"
import { useNavigate } from "react-router-dom";

export const AnimalList = () => {
    const [animals, setAnimals] = useState([])

    const navigate = useNavigate()
    
    const getAnimals = () => {
        return getAllAnimals()
        .then(animalsFromAPI => {
            setAnimals(animalsFromAPI)
        })
    }

    useEffect(() => {
        getAnimals()
    }, [])

    const handleDeleteAnimal = (id) => {
        deleteAnimal(id)
        .then(() => getAllAnimals().then((res) => setAnimals(res)))
    }
    
    return (
        <>
            <section className="section-content">
                <button 
                    type="button"
                    className="btn"
                    onClick={() => {navigate("/animals/create")}}
                    >
                        Admit Animal
                    </button>
            </section>

            <div className="container-cards">
                {animals.map(animal => 
                    <AnimalCard 
                        key={animal.id} 
                        animal={animal}
                        handleDeleteAnimal={handleDeleteAnimal} />)}
            </div>
        </>
    )
}