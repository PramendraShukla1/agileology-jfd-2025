import { useEffect } from "react"
import Updating from "./components/Updating"
import Student from "./components/Student"
import UseState from "./components/UseState"
import UseEffectDemo from "./components/UseEffectDemo"
import { ThemeProvider } from "./components/UseContextDemo"
import Navbar from "./components/Navbar"
import FocusInput from "./components/FocusInput"
import RenderCounter from "./components/RenderCounter"
import UseMemoDemo from "./components/UseMemoDemo"
import UseCallBackHook from "./components/UseCallBackHook"
import UseReducerHookDemo from "./components/UseReducerHookDemo"
import CounterA from "./components/CounterA"
import CounterB from "./components/CounterB"
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import AboutUS from "./components/AboutUS"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Layout from "./utils/Layout"
import ReactForm from "./components/ReactForm"

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
{/* <ThemeProvider>
  <div>
    <h1>useContext Demo</h1>
    <Navbar/>
  </div>
</ThemeProvider> */}
{/* <UseEffectDemo/> */}
{/* <FocusInput/>
<RenderCounter/> */}
{/* <UseMemoDemo/> */}

{/* <UseCallBackHook/> */}
{/* <UseReducerHookDemo/> */}
{/* <CounterA/>
<CounterB/> */}

<Routes>
  <Route path="/" element={<Layout/>}>
  <Route path="/" index  element={<Home/>}/>
  <Route path="/about-us" element={<AboutUS/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/contact-us" element={<Contact/>}/>
  <Route path="/form" element={<ReactForm/>}/>
  </Route>
  
</Routes>
  </>
  )
}

export default App