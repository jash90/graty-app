import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import AddGame from "./screens/AddGame";
import Home from "./screens/Home";
import ListGames from "./screens/ListGames";
import Register from "./screens/Register";

export default function App() {
  return (
    <>
      <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/listgames" element={<ListGames />} />
          <Route path="/addgame" element={<AddGame />} />
        </Routes>
    </>
  );
}