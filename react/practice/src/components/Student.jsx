import React from 'react'

const Student = (props) => {
    
  return (
    <div>
        <h2>Students Details</h2>
        <h3>Student name : {props.name}</h3>
        <h3>Student Age : {props.age}</h3>
        <h3>Student Year : {props.year}</h3>
        <button onClick={()=>{props.greet(props.name)}}>Greet</button>
    </div>
  )
}

export default Student