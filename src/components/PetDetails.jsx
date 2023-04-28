import React from "react";
import { TbConfetti, TbConfettiOff } from "react-icons/tb";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export default function PetDetails({pet}) {
  function addFavorite(e) {
    e.preventDefault()
    fetch("http://localhost:3000/favorites/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: pet.id,
        name: pet.name,
        species: pet.species,
        breed: pet.breed,
        age: pet.age,
        gender: pet.gender,
        color: pet.color,
        weight: pet.weight,
        location: pet.location,
        picture: pet.picture,
        personality_description: pet.personality_description,
        shelter: pet.shelter,
        shelter_website: pet.shelter_website,
        house_trained: pet.house_trained,
        good_with_children: pet.good_with_children,
        good_with_other_pets: pet.good_with_other_pets})
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

    return (
      <div className="petDetails">
       <p className = "fs-2">Hi, I'm {pet.name}</p> 
       <img src={pet.picture} alt={pet.name} />
       <p>Age: {pet.age} | Gender: Goodest {pet.gender} | Location: {pet.location}</p>
       <Button variant="warning" size="sm" onClick={addFavorite}> Yoink! </Button>
        <p className="fs-4">Get to know {pet.name}!</p>
          <p> Breed: {pet.breed} </p>
          <p>Weight: {pet.weight} lbs</p>
          <p>Color: {pet.color}</p>
          <p><strong>About Me:</strong> <br /> {pet.personality_description}
          <br />
          I am:
          <li> House trained: {pet.house_trained ? <TbConfetti /> : <TbConfettiOff />} </li>
          <li>Comfortable with children: {pet.good_with_children ? <TbConfetti /> : <TbConfettiOff />}</li>
          <li>Comfortable with other pets: {pet.good_with_other_pets ? <TbConfetti /> : <TbConfettiOff />}</li>
          </p>
         <p>To learn more about me, please find me at {pet.shelter}</p>
         <Card.Link href={pet.shelter_website}>{pet.shelter_website}</Card.Link>
    
      </div>
    )
  }
