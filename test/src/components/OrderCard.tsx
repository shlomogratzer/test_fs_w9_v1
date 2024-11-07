import React from 'react'
import {TurtlesT} from '../App'
interface PropsT{
    ninjasTurtles:TurtlesT
}

const OrderCard = ({ninjasTurtles}:PropsT) => {
  return (
    <div className=''>
      <h3>{ninjasTurtles.name}</h3>
      <img src={ninjasTurtles.img} alt="" style={{width:'200px', height:'200px'}}/>
    </div>
  )
}

export default OrderCard
