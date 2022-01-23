import React from "react";
import { Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "./App.css";
import { userState } from "./atoms";
import NavigationBar from "./components/NavigationBar";
import AddGame from "./screens/AddGame";
import Home from "./screens/Home";
import ListGames from "./screens/ListGames";
import LoanGame from "./screens/LoanGame";
import NotFound from "./screens/NotFound";
import Register from "./screens/Register";

export default function App() {
  const user = useRecoilValue(userState);
  const visibleAuth = !!user;
  const visibleRoot = !!user?.root;


  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {!visibleAuth && <Route path="/register" element={<Register />} />}
        <Route path="/listgames" element={<ListGames />} />
        {visibleRoot && <Route path="/addgame" element={<AddGame />} />}
        {visibleAuth && <Route path="/loangame" element={<LoanGame />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}