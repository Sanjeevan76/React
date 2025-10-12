import React, { useState } from 'react';
import "./App.css";

const ErrorAleart = () => {

  const [name,setName]=useState("");
  const [nameErr,setNameErr]=useState("");
  const [passErr,setPassErr]=useState("");

  const NameValue=(event)=>{
      console.log(event.target.value);
      if(event.target.value.length>6)
      {
        setNameErr("please enter less than 6 letter");
      }
      else{
        setNameErr("");
      }
  }


  //simple condition for password
  //  const PassValue=(event)=>{
  //     console.log(event.target.value);
  //     if(event.target.value.length>6)
  //     {
  //       setPassErr("please enter less than 6 letter");
  //     }
  //     else{
  //       setPassErr("");
  //     }
  // }

  //agar chate ho ki password me special char a aaye bass alphbet and number aaye to uske liye regex bnana prta hai
  //agar regex follow hota hai to shi hai warna error show hoga

  const PassValue=(event)=>{
    let regex=/^[A-Z0-9]+$/i
      console.log(event.target.value);
      if(regex.test(event.target.value))
      {
        setPassErr("");
       
      }
      else{
         setPassErr("please enter less than 6 letter");
      }
  }

  return (
    <div>
      <input className={nameErr?'error':''} type="text" onChange={NameValue} placeholder='Enter Name' />
     <br></br> <span>{nameErr && nameErr}</span>
      <br>
      </br> <br>
      </br>
      <input  className={passErr?'error':''}  type="text" placeholder='Enter Email' onChange={PassValue} /> <br>
      </br> <span>{passErr && passErr}</span>
      <br>
      </br>
      <button disabled={nameErr}>Submit</button>
    </div>
  )
}

export default ErrorAleart
