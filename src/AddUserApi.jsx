import React, { useState } from 'react'
import AddUserApi2 from './AddUserApi2';

const AddUserApi = () => {
    const [name,setname]=useState('');
    const [age,setage]=useState('');
    const [email,setemail]=useState('');

     

   async function getdata(){
        const url="http://localhost:3000/users";
        let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, age, email })
    });
        response=await response.json();
        // console.log(response);
        if(response)
        {
            alert("new user added");
        }

    }

  
  return (
    <>
    <div>
        <h1 style={{color:"red"}}>Fill the form to add users</h1>
        <input type="text" onChange={(event)=>setname(event.target.value)} placeholder='enter name' required/><br></br>
        <input type="text" onChange={(event)=>setage(event.target.value)} placeholder='enter age' /><br></br>
        <input type="text" onChange={(event)=>setemail(event.target.value)} placeholder='enter email' /><br></br><br></br>
      <button onClick={getdata} style={{padding:"8px",color:"white",backgroundColor:"black",fontWeight:"2px",border:"2px solid white",cursor:"pointer"}}>submit</button>
    </div><br></br>
    <AddUserApi2/>
</>
  )
}

export default AddUserApi
