import {div, mul, sub, sum} from "./components/mathOperations"
 import './App.css'

// function App() {


//   return (
//     <>
// <p>Hello this is my first react application</p>
// <p>Hello this is my first react application</p>
// </>
//   )
// }

// export default App



// Class Component
// import React from 'react'
// class App extends React.Component {
//   render(){
//     return(
//       <p>Hello this is my first react application</p>
//     )
//   }
// }


// Functional Component
import React from 'react'

const App = () => {
  return (
    <div>
      {sum(10, 20)}
    </div>
  )
}

export default App