import React from "react";
import "./Tour.css";

export default function Tour(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} />
    </div>
  );
}
