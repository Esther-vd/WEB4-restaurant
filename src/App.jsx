import { useState } from "react";
import initialRestaurant from "./restaurant";
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import Menu from "./components/Menu";
import Tables from "./components/Tables";
import Table from "./components/Table";

function App() {
  const [restaurant, setRestaurant] = useState(initialRestaurant);


  return (
    <>
      <h1>Vite + React</h1>
      <div className="container cols">
        <nav>
          <ul>
            <li><NavLink to="/">tables</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            {Object.values(restaurant.tables).map((table) => (
              <li key={table.id}><NavLink to={`/table/${table.id}`}>{table.name}</NavLink></li>
            ))}
          </ul>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Tables tables={restaurant.tables} />} />
            <Route path="/menu" element={<Menu menu={restaurant.menu} />} />
            <Route path="/table/:tableId" element={<Table table={'what'}/>}/>
          </Routes>
        </div>
      </div >
    </>
  )
}

export default App
