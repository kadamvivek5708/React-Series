import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react' 



// const anotherElement = (
//     <a href="https://google.com"  target="_blank"> Click Me! </a>
// )

// Element creation using react rules
const myObj = React.createElement(
  'a',
  {href:"https://react.com",target:"_blank"},
  "This is react"
)
createRoot(document.getElementById('root')).render(
  myObj
)
