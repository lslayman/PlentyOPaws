import React, { useEffect, useState } from "react";
import PetDetails from "./PetDetails"
import NavBar from "./NavBar"
import Card from 'react-bootstrap/Card'

export default function PetCard() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pets")
    .then((res) => res.json())
    .then((pets) => setPets(pets))
  }, []);

  const displayPet = pets.map((pet) => (
    <div className="card">
      <PetDetails pet={pet}/>
    </div>
  ))

  return (
    <>
    <NavBar />
    <div>
      <Card style={{width: '40rem'}}>
        {displayPet}
      </Card>
    </div>
    </>
    )
}
