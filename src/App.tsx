import React from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "./App.css";
import { userState } from "./atoms";
import NavigationBar from "./components/NavigationBar";
import AddGame from "./screens/AddGame";
import Home from "./screens/Home";
import ListGames from "./screens/ListGames";
import LoanGame from "./screens/LoanGame";
import NotFound from "./screens/NotFound";
import Profile from "./screens/Profile";
import Register from "./screens/Register";

export default function App() {
  const user = useRecoilValue(userState);
  const visibleAuth = !!user;
  const visibleRoot = !!user?.admin;

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/listgames' element={<ListGames />} />
        <Route path='/addgame' element={<AddGame />} />
        <Route path='/loangame' element={<LoanGame />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
