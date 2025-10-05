import React, { useEffect, useState } from 'react';
import './app.css'

const ApiDataFetch = () => {
    const[data,setUserdata]=useState([]);
    useEffect(()=>{
         getUserData();
    },[]) 

   async function getUserData(){
        const url="https://dummyjson.com/users";
        let response= await fetch(url);
        response=await response.json();
        // console.log(response.users);
        setUserdata(response.users);
     
    }
    console.log(data);
  return (

    <div>
        <ul className='userData heading'>
            <li>First Name</li>
            <li>Last Name</li>
            <li>Age</li>
            {/* <li>Email</li> */}
        </ul>
     {
       data && data.map((user)=>(
           <ul className='userData'>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
            {/* <li>{user.email}</li> */}
           </ul>
       ))
     }
    </div>
  )
}

export default ApiDataFetch
