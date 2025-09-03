import React, { useState } from 'react';
import Filtera from './Filter';

const HandleCheckbox = () => {
    const [print,setprint]=useState([]);
    const handlecheck=(event)=>{
        // console.log(event.target.value);
        // console.log(event.target.checked) //check the checkbpx checked or not,give true and false value
       if(event.target.checked)
       {
        setprint([...print,event.target.value])
       }
       else{
        setprint([...print.filter((items)=>items!=event.target.value)]) 
        // after click 2nd time it help to disapear 
       }
    }
  return (
    <div>
      <input type='checkbox' onChange={handlecheck} id='php' value="php"></input>
      <label htmlFor='php'>php</label>
    <br/>
      <input type='checkbox' onChange={handlecheck} id='react' value="react"></input>
      <label htmlFor='react'>react</label>
      <br/>
      <input type='checkbox' onChange={handlecheck} id='html' value="html"></input>
      <label htmlFor='html'>html</label>
        <br/>
      <input type='checkbox' onChange={handlecheck} id='dsa' value="dsa"></input>
      <label htmlFor='dsa'>dsa</label>
        <br/>
      <input type='checkbox' onChange={handlecheck} id='node' value="node"></input>
      <label htmlFor='node'>node</label>
      <p>{print.toString()}</p> 
      {/* toString() helpt to make it string so that it print with commas */}

      <Filtera/>
    </div>
  )
}

export default HandleCheckbox
