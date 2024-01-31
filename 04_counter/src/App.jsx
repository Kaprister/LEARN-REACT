import './App.css'
import { useState } from 'react';

function App() {

  // let [counter, setCounter] = useState(15)
  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    console.log("value added", counter, Math.random());
    // counter = counter + 1;
    // if(counter < 20){
    //   setCounter(counter + 1)
    // }

    setCounter((prevCounter) => prevCounter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)


  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button
        onClick={addValue}
      >
      Add value {counter}</button>
      <button
        onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
