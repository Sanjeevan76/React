import React, { useState } from 'react'

export default function Getinputval() {
    const [name,setname]=useState("")
  return (
    <div>
     <p>enter input </p>
<input type='text' value={(name)} onChange={(event)=>setname(event.target.value)}></input>
<h1>{name}</h1>
<button onClick={()=>setname("")}>clear name</button>
    </div>
  )
}
