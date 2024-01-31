import { useState } from "react"


function App() {
  const [color, setColor] = useState("wheat")

  const selectColor = ['red', 'blue', 'green', 'yellow', 'aqua', 'olive', 'pink', 'lavender', 'black', 'gray'];

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor : color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">


            {selectColor.map((c) => (
              
              <button
                key={c}
                className={`outline-none px-4 rounded-full text-white shadow-lg ${color === c ? 'border-2 border-solid border-t-amber-500 border-b-amber-500' : ''}`}
                style={{backgroundColor : c}}
                onClick={() => setColor(c)}
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}









            {/* <button className=" outline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor : "red"}}
              onClick={() => setColor("red")}
            >Red</button>
            <button className=" outline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor : "blue"}}
              onClick={() => setColor("blue")}
            >Blue</button>
            <button className=" outline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor : "green"}}
              onClick={() => setColor("green")}
            >Green</button>
            <button className=" outline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor : "yellow"}}
              onClick={() => setColor("yellow")}
            >Yellow</button>
            <button className=" outline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor : "aqua"}}
              onClick={() => setColor("aqua")}
            >Aqua</button>

            <button className=" outline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor : "olive"}}
              onClick={() => setColor("olive")}
            >Olive</button>
            <button className=" outline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor : "pink"}}
              onClick={() => setColor("pink")}
            >Pink</button>
            <button className=" outline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor : "lavender"}}
              onClick={() => setColor("lavender")}
            >Lavender</button>
            <button className=" outline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor : "black"}}
              onClick={() => setColor("black")}
            >Black</button>
            <button className=" outline-none px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor : "gray"}}
              onClick={() => setColor("gray")}
            >Gray</button> */}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
