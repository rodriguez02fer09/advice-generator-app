import React from "react";
import "./card.css";
import CardInformation from "../CardInformation/CardInformation";
import Oval from "../../assets/oval.svg"
import Path from "../../assets/path.svg"

const Card = () => {
  return (
    <div className="container-card">
      <CardInformation id="id" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
<div className="container-img">
  <img  className ="oval" src= {Oval} alt="oval" />
  <img  className = "path"src= {Path} alt="'path" />
</div>
    </div>
  );
};

export default Card;
