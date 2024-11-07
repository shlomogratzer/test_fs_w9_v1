import React, { useEffect } from 'react'
import {TurtlesT} from '../App'

interface PropsT{
    toppings:TurtlesT
    ninjasTurtles:TurtlesT[]
    setNinjasTurtles:(turtles:TurtlesT[]) => void
}

const Toppings = ({toppings,ninjasTurtles, setNinjasTurtles}:PropsT) => {
    useEffect(()=>{
        
        },[ninjasTurtles])

    const ifexist = () =>{
        return ninjasTurtles.filter(item => {
            item.name === toppings.name 
        })
    }
    const addOrder =() =>{
        if(ifexist().length > 1)return
        setNinjasTurtles([...ninjasTurtles,toppings])
        
    }
  return (
    <button onClick={addOrder}>{toppings.name}</button>
  )
}

export default Toppings

