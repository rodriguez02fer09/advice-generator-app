import React from "react";
import "./cardInformation.scss";
import Line from "../../assets/line.svg";


const CardInformation = ({ id, advice }) => {
  return (
      <div className="card">
        <div className="card__id">
          <p>ADVICE # </p>
          <p> {id} </p>
        </div>

        <div className="card__advice">
          <p>{advice}</p>
        </div>
        <div className="card__line">
          <img src={Line} alt="line"/>
        </div>
      </div>
  );
};

export default CardInformation;
