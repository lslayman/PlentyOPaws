import React, {useEffect, useState }from "react";
import NavBar from "./NavBar";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/favorites")
    .then((res) => res.json())
    .then((faves) => setFavorites(faves))
  }, []);

  const list = favorites.map((fave) => {
    return(

    <h3>{fave.name}</h3>
    )
  })

    return (
      <>
      <NavBar />
      <div>
      <h2><strong>Favorites</strong></h2>
      {list}
      </div>
      </>
    )
  }
