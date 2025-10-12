import React, { useReducer } from 'react';
import './app.css';

const emptyData={
    name:" ",
    email:" ",
    state:" ",
    City:" ",
    Address:" ",
    Pincode:" ",
    Landmark:" ",
}
const reducer=(data,action)=>{
    // console.log(data,action);
    return {...data,[action.type]:action.val}
}

const UseReducer = () => {
    const [state,dispatch]=useReducer(reducer,emptyData);
    console.log(state);
  return (
    <div>
      <h1>Using Reduce</h1>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'name'})} placeholder='Enter Name' /><br></br><br></br>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'Email'})} placeholder='Enter Email' /><br></br><br></br>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'State'})} placeholder='Enter State' /><br></br><br></br>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'City'})} placeholder='Enter City' /><br></br><br></br>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'Address'})} placeholder='Enter Address' /><br></br><br></br>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'Pincode'})} placeholder='Enter Pincode' /><br></br><br></br>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'Landmark'})} placeholder='Enter Landmark' /><br></br><br></br>
      <button onClick={()=>console.log(state)}>Submit</button>


      <ul>
        <li>Name:{state.name}</li>
        <li>Email:{state.Email}</li>
        <li>State:{state.State}</li>
        <li>City:{state.City}</li>
        <li>Address:{state.Address}</li>
        <li>Pincode:{state.Pincode}</li>
        <li>Landmark:{state.Landmark}</li>
      </ul>
    </div>
  )
}

export default UseReducer
