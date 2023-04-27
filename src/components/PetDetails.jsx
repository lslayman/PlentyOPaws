import React from "react";


export default function PetDetails({pet}) {
  console.log(pet)

    return (
      <div key ={pet.id}>
        <img src={pet.photos[0]}/>
        <p><strong>{pet.name}</strong>, {pet.breeds.primary}</p>
        <p>{pet.contact.address.city}</p>
        <p>{pet.gender}</p>
        <p>{pet.age}</p>
        <p>{pet.description}</p>
        </div>
  
      )}