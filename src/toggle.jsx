import React, { useState } from 'react'

const Toggle = () => {

    const [display,setDisplay]=useState(true);
  return (
    <>
     <button onClick={()=>setDisplay(!display)}>Disapear Name</button>
        {
            display?<h1>Sanjeevan Kumar</h1>:null
        }
       
        <hr></hr>
      
    </>
  )
}

export default Toggle
