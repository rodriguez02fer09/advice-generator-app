import React from "react";
import "./cardInformation.css";
import Line from "../../assets/line.svg";

const CardInformation = ({ id, texto }) => {
  return (
    
      <div className="card">
        <div className="card-id">
          <p>ADVICE #</p>
          <p>{id}</p>
        </div>

        <div className="card-advice">
          <p>{texto}</p>
        </div>
        <div className="card-line">
          <img src={Line} alt="line" />
        </div>
      </div>
   
  );
};

export default CardInformation;
