import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'



function App() {

  return (
    <>
      <div className=' bg-black p-5 rounded-xl'>
        <h1 className=' text-blue-500 font-extrabold text-3xl '>Todo List</h1>
        <AddTodo/>
        <Todos/>
      </div>
    </>
  )
}

export default App
