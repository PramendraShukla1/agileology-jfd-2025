import { useEffect } from "react"
import Updating from "./components/Updating"
import Student from "./components/Student"
import UseState from "./components/UseState"
import UseEffectDemo from "./components/UseEffectDemo"
import { ThemeProvider } from "./components/UseContextDemo"
import Navbar from "./components/Navbar"


function App(){
//   useEffect(()=>{
//     console.log("Component Mounted")

//     return () => {
//       console.log("Component Unmount!")
//     }
//   },[])

function greet(name) {
  alert(`Hello ${name}`)
}
  return (
  <>
   {/* <h2>Mounting And Mounting</h2>
<Updating/> */}

{/* <Student name="Pramendra" age= {25} year = {4} greet={greet}/>
<Student name="Ramesh" age={38} year = {3} greet={greet}/> */}

{/* <UseState/> */}
<ThemeProvider>
  <div>
    <h1>useContext Demo</h1>
    <Navbar/>
  </div>
</ThemeProvider>
{/* <UseEffectDemo/> */}
  </>
  )
}

export default App