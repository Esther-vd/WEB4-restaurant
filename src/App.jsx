import { useState } from "react";
import initialRestaurant from "./restaurant";
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router";

function App() {
  const [restaurant, setRestaurant] = useState(initialRestaurant);


  return (
    <>
      <h1>Vite + React</h1>
      <div className="container cols">
        <nav>
          <ul>
            {Object.values(restaurant.tables).map((table) => (
            <li>
                <NavLink to="/">{table.name}</NavLink>
            </li>
            ))}
        
          </ul>
        </nav>
        <div>
          <Routes>
            <Route path="/" />
            <Route path="/edit" />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
