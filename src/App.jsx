import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import PetCard from './components/PetCard';
import Favorites from './components/Favorites';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/petCard",
      element: <PetCard />
    },
    {
      path: "/favorites",
      element: <Favorites />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
