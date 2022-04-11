import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import "./AnimalForm.css"

export const AnimalEditForm = () => {
    const [animal, setAnimal] = useState({ name: "", breed: "" })
    const [isLoading, setIsLoading] = useState(false)
}