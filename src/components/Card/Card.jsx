import React , { useState,useEffect }from "react";

import "./card.scss";
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
    <div className="container__card">
      <CardInformation id={slip?.id} advice={slip?.advice} />
      <div className="container__img">
        <img src= {Oval} alt="oval" />
        <img  className="container__img__path"src= {Path} alt="'path" onClick={llamarApi} />
      </div>
    </div>
  );
};

export default Card;
