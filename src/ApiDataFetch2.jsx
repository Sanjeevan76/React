import React, { useEffect, useState } from 'react'

const ApiDataFetch2 = () => {

    const [data,setdata]=useState([]);
    useEffect(()=>{
        userData();
    },[])

  async function userData(){
        const url="https://dummyjson.com/users";
        let response= await fetch(url);
        response=await response.json();
        console.log(response.users);
        setdata(response.users);

    }
  return (
    <div>
      {
        data && data.map((user)=>(
            <p>{user.firstName}</p>
        ))
      }
    </div>
  )
}

export default ApiDataFetch2
