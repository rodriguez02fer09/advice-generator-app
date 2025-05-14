import React from 'react'
import './cardInformation.css'
import Line from '../../assets/Line' // Asumiendo que Oval es un componente SVG

interface CardInformationProps {
  id: number
  advice: string
}

const CardInformation = ({id, advice}: CardInformationProps): JSX.Element => {
  return (
    <div className="card">
      <div className="card-id">
        <p>ADVICE #</p>
        <p>{id}</p>
      </div>

      <div className="card-advice">
        <p>{advice}</p>
      </div>
      <div className="card-line">
        <Line />
      </div>
    </div>
  )
}

export default CardInformation
