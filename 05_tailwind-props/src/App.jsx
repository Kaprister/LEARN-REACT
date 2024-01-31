import './App.css'
import Card from './components/Card'

function App() {

  // let myObj = {
  //   username : "sushant",
  //   age : 21
  // }

  return (
    <>
      <h1 className=' bg-green-400 text-black rounded-md mb-3'>Tailwind Test</h1>
      <Card username="chaiaurcode" btnText="Click me" />
      <Card username="sushant" btnText="Visit me" />

    </>
  )
}

export default App
