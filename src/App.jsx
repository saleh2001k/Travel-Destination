import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TourDetails from "./components/TourDetails/TourDetails";
import Home from "./components/home/Home";



const Data = require("./data/db.json");

export default function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home data={Data} />}></Route>
        <Route
          path={"/city/:id"}
          element={<TourDetails data={Data} />}
        ></Route>
      </Routes>
    </>
  );
}
