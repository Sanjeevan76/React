import React from 'react'
import {useId} from 'react';

//useId helpt to generate unique key in every call to hum kisi ki id ke liye ye use kr skte hai 
const UserId = () => {
  
  return (
    <div>
     <UseId/>
     {/* <UseId/> */}
    </div>
  )
}

export default UserId


const UseId = () => {
    const name=useId();
    const password=useId();
    // const name=userId();
    // const name=userId();
  return (
    <div>
     
      <form action="">
        <label htmlFor={name}>Enter your name</label>
        <input id={name} type="text" placeholder='enter your name' /> 
        {/* as you can see agar ye name wala input 2-3 time ho to hume id alag alag dena ho iske liye hum useId ka use kr denge jo automatically id generte krega */}
     <br></br> <label htmlFor={password}>Enter your password</label>
        <input id={password} type="text" placeholder='enter your password' />
      </form>

      {/* //you can also wright */}
      <hr></hr>
       <form action="">
        <label htmlFor={name+"name"}>Enter your name</label>
        <input id={name+"name"} type="text" placeholder='enter your name' /> 
      
     <br></br> <label htmlFor={name+"password"}>Enter your password</label>
        <input id={name+"password"} type="text" placeholder='enter your password' />
      </form>

    </div>
  )
}


