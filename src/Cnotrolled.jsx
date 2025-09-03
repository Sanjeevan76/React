import React, { useState } from 'react'

const Cnotrolled = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");

  return (
    <> 
    {/* importaten notes. 
    agar input fied ki value get krna ho to onchange ka use krna hoga jaisa kiya hai isme ,state ka use krke set kiya hai
    ab chte hai ki jab button se clear kre to input field bhi clear ho uske liye value={name } kiya hai jisse phir se null aa jayega
 */}

         <div>
      <input type='text' value={name} placeholder='enter name' onChange={(event)=>setName(event.target.value)}></input><br/><br/>
      <input type='email' value={email} placeholder='enter email' onChange={(event)=>setEmail(event.target.value)}></input><br/><br/>
      <input type='number'value={phone} placeholder='enter number' onChange={(event)=>setPhone(event.target.value)}></input><br/><br/>
    </div>
    <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{phone}</h1>
    </div>

    <div>
        <button onClick={()=>{setName(""),setEmail(""),setPhone("")}}>clear</button>
    </div>


    </>
   
  )
}

export default Cnotrolled
