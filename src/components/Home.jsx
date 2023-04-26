import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar';
import PetCard from './PetCard';

export default function Home() {
  return (
    <>
    Home
    <br/>
    <Link to="/about">About</Link>
    <br/>
    <Link to="/petCard">PetCard</Link>
    </>
  )
}
