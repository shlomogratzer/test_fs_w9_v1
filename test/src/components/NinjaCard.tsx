import React, { useEffect } from 'react'
import {NinjaT,TurtlesT} from '../App'
import Toppings from './Toppings'

interface PropsT{
    ninja: NinjaT
    ninjasTurtles: TurtlesT[]
    setNinjasTurtles: (ninja: TurtlesT[]) => void
}

const NinjaCard = ({ninja,ninjasTurtles,setNinjasTurtles}:PropsT) => {

  return (
    <div>
      <h3>{ninja.name}</h3>
      <img src={ninja.img} alt="" style={{width:'250px'}}/>
      <div>
        <h3>Toppings:</h3>
        {ninja.pizzaToppings.map((prefer)=>{
          return <Toppings toppings={prefer} ninjasTurtles={ninjasTurtles} setNinjasTurtles={setNinjasTurtles}/>
        })}
      </div>
    </div>
  )
}

export default NinjaCard
