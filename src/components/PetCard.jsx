import React, { useEffect } from "react";
import PetDetails from "./PetDetails"
// import * as dotenv from 'dotenv'


export default function PetCard() {
  //console.log(import.meta.env.VITE_API_KEY)
   useEffect(() => {
     fetch("https://api.rescuegroups.org/v5/public/animals/", {
      method: "GET",
      headers: {
        "Content-Type": "application/vnd.api+json",
        "Authorization": "{{xblsgOJW}}"
      }
     })
     .then((res) => res.json())
     .then((data) => console.log(data))
   }, [])
    return (
      <div>Pet Card</div>
    )
  }
