import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img src={`https://robohash.org/${props.monster.id}?sset=set2&size=180x180`} alt="" />
    <h2>
      {props.monster.name} {props.monster.id}
    </h2>
    <p>{props.monster.email}</p>
  </div>
);
