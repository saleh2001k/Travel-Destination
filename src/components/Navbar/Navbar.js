import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Home</Link>
        </h1>
      </header>
    </>
  );
}
