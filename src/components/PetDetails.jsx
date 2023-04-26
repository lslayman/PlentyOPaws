import React from "react";

export default function PetDetails({pet}) {
    return (
      <div className="petDetails">
       <h3>{pet.name}</h3>
       <img src={pet.picture} alt={pet.name} />
      </div>
    )
  }
