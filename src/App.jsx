import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import PetCard from './components/PetCard';
//import { create } from 'domain';

export const AuthContext = createContext();
const API_KEY = import.meta.env.VITE_API_KEY;
const API_SECRET = import.meta.env.VITE_API_SECRET

function App() {
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    const fetchToken = async () => {
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');
      params.append('client_id', API_KEY);
      params.append('client_secret', API_SECRET);

      const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: params,
      });

      const data = await response.json();
      setAccessToken(data.access_token)
    };
    fetchToken();
    const interval = setInterval(fetchToken, 3600000);

    return () => clearInterval(interval);
}, []);
  
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
    }
  ])

  return (
    <AuthContext.Provider value={accessToken}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
}

export default App
