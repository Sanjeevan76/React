import React from 'react'
import { useRef } from 'react';
import Timer from './UseRef2'

const UseRef = () => {

    const inputRef=useRef()

    const clickinputRef=()=>{
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color="red";  //change text color after click on button
        inputRef.current.placeholder="password"; 
        inputRef.current.value="123"; 
    }

    const toggleBtn=()=>{
        if(inputRef.current.style.display!="none")
        {
              inputRef.current.style.display="none";
        }
        else
        {
              inputRef.current.style.display="inline";
        }
      
    }
  return (
    <div>
      <h1>Using UseRef</h1>
   <input ref={inputRef} type="text" placeholder='enter name'></input> 
      <button onClick={clickinputRef}>submit</button> 
      <br/>
      <button onClick={toggleBtn}>toggle</button> 
      <Timer/>
    </div>
  )
}

export default UseRef
