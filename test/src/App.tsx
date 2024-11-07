import { useEffect, useState } from 'react'
import NinjaCard from './components/NinjaCard'
import OrderCard from './components/OrderCard'
import './App.css'


export interface NinjaT{
    name: string
    img: string,
    pizzaToppings: [
      {
        name: string,
        img: string
      },
      {
        name: string,
       img: string
      }
    ]
}
export interface TurtlesT{
    name: string,
    img: string
}

function App() {
  const [ninjas, setNinjas] = useState<NinjaT[]>([])
  const [ninjasTurtles, setNinjasTurtles] = useState<TurtlesT[]>([])

  useEffect(()=>{
    fetch('/data.json')
    .then((res)=>res.json())
    .then(data => setNinjas(data))
    .catch(error => console.error('no information',error));
  },[])

  return (
    <>
      <header>
        <h1>Ninja Turtles</h1>
        <h2>Order Pitza with the turtles</h2>
      </header>
      <div className='ninja-card'>
        {ninjas.map(ninja=>{
          return <NinjaCard ninja={ninja} ninjasTurtles={ninjasTurtles} setNinjasTurtles={setNinjasTurtles}/>
        })}
      </div>
      <div>
        <h2>Our order:</h2>
        <div className='ninja-card'>
          {ninjasTurtles.map(turtles =>{
            return <OrderCard ninjasTurtles={turtles}/>
          })}
        </div>
      </div>
    </>
  )
}

export default App
