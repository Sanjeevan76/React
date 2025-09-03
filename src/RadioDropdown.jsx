import React, { useState } from 'react'

const RadioDropdown = () => {
    const [gender,setgender]=useState("female");
    const [state,setstate]=useState("");
  return (
    <>
             <div>
        <h2>Select gender</h2>
      <input type='radio' id='male' name="gender" onChange={(event)=>setgender(event.target.value)} value="male" checked={gender=='male'}></input>
      {/* if you want that at a time only one option select then name attribute for every input are same */}
      <label htmlFor='male'>male</label>
      <br></br>
      <input type='radio' id='female' name="gender" onChange={(event)=>setgender(event.target.value)} value="female" checked={gender=='female'}></input>
      <label htmlFor='female'>female</label>
    {/* here checked={gender=='female'} check krega ki gender fenale hai to ye radio select ho,kuki humne set feale kiya hai usestate me */}
      <h1>{gender}</h1>
    </div>

    <br></br>
    <br/>
    <div>
       <select onChange={(event)=>setstate(event.target.value)} defaultValue="delhi">
        <option value="noids" >noida</option>
        <option value="delhi" >delhi</option>
        <option value="bihar" >bihar</option>
        <option value="goa" >goa</option>
       </select>
       <h3>{state}</h3>
    </div>
    </>
   
  )
}

export default RadioDropdown
