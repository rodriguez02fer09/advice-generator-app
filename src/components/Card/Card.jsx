import React , { useState,useEffect }from "react";

import "./card.css";
import CardInformation from "../CardInformation/CardInformation";
import Oval from "../../assets/oval.svg"
import Path from "../../assets/path.svg"

const Card = () => {
  const [slip, setSlip] = useState({});

  const llamarApi = () => {
    fetch(`https://api.adviceslip.com/advice`)
   .then(response => response.json()) //convertir a json 
   .then(data => setSlip(() => {//mostrar la data y mostrarala como quiero
    return {
      ...data.slip 
    }
   }))
    .catch(error => console.error(error))//capturar errores
 }
  
 useEffect(()=>{
  llamarApi()
 },[])

  return (
    <div className="container-card">
      <CardInformation id={slip?.id} advice={slip?.advice} />
      <div className="container-img">
        <img  className ="oval" src= {Oval} alt="oval" />
        <img  className = "path"src= {Path} alt="'path" onClick={llamarApi} />
      </div>
    </div>
  );
};

export default Card;
