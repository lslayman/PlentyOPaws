import React, { useEffect, useState } from "react";
import PetDetails from "./PetDetails"

//image, name, location, age

export default function PetCard() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/pets")
    .then((res) => res.json())
    .then((pets) => setPets(pets))
  }, []);

  const displayPet = pets.map((pet) => (
    <PetDetails pet={pet}/>
  ))
    return (
      <div>{displayPet}</div>
    )
  }
