import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'




// function MyApp(){
//   return (
//       <h3>Custom app !!</h3>
//   )
// }


// const reactElement = {
//   type: 'a',
//   props : {
//       href : 'https://google.com',
//       target: '_blank',
//   },
//   children : 'Click me to visit google'
// }


// const customElement = (
//     <h1>Hello Custom Element !!</h1>
// )

// const anotherUser = 'chai aur react'

// const reactElement = React.createElement(
//   'a',
//   {href : 'https://google.com', target : '_blank'},
//   'click me to visit google !!',
//   anotherUser
// )




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // <MyApp />
  // MyApp()

  // reactElement  // this  gives you error

  // customElement

  // reactElement

)
