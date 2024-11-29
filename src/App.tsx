import { useState } from 'react'
import './App.css'
import { Button } from './components'

//esto es un componente el cual debe llevar la minima logica posible.

function App() {
  const [count, setCount] = useState(0)

  const countMore = () => {
    setCount((count) => count +1)
  }

  return (
    <>  
    <Button label={`Count is ${count}`} parentMethod={countMore} /> 
    </>
  )
}

export default App
