import React, {useState, useEffect} from 'react'
import './card.css'
import CardInformation from '../CardInformation/CardInformation'
import Oval from '../../assets/Oval'
import Path from '../../assets/Path'

interface Slip {
  id: number
  advice: string
}

const Card = (): JSX.Element => {
  const [slip, setSlip] = useState<Slip>({id: 0, advice: ''})

  const llamarApi = () => {
    fetch(`https://api.adviceslip.com/advice`)
      .then(response => response.json()) //convertir a json
      .then(data =>
        setSlip(() => {
          //mostrar la data y mostrarala como quiero
          return {
            ...data.slip,
          }
        }),
      )
      .catch(error => console.error(error)) //capturar errores
  }

  useEffect(() => {
    llamarApi()
  }, [])

  return (
    <div className="container-card">
      <CardInformation id={slip?.id} advice={slip?.advice} />
      <div className="container-img">
        <Oval />
        <Path onClick={llamarApi} />
      </div>
    </div>
  )
}

export default Card
