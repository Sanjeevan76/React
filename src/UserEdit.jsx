import React, { useEffect,useState } from 'react'
import {  useParams,useNavigate } from 'react-router'

const UserEdit = () => {
    const {id}=useParams();
     const navigate=useNavigate();
    // console.log(id);
     const [name,setname]=useState('');
        const [age,setage]=useState('');
        const [email,setemail]=useState('');

         const url="http://localhost:3000/users/"+id;

    useEffect(()=>{
        getUserData();
    },[])

   async function getUserData(){
       
        // console.log(url);
        let response=await fetch(url);
        response=await response.json();
        // console.log(response);
        setname(response.name);
        setage(response.age);
        setemail(response.email);

    }


    async function getdata(){
    
        let response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, age, email })
    });
        response=await response.json();
        // console.log(response);
        if(response)
        {
            alert(" user information updated");
        }
        navigate('/');

    }

  return (
    <div>
      <h1>Edit your info.</h1>
      <input type="text" placeholder='enter  name' onChange={(event)=>setname(event.target.value)} value={name} /><br></br><br></br>
      <input type="text" placeholder='enter age' onChange={(event)=>setage(event.target.value)} value={age} /><br></br><br></br>
      <input type="text" placeholder='enter email' onChange={(event)=>setemail(event.target.value)} value= {email} /><br></br><br></br>
     <button onClick={getdata} style={{padding:"8px",color:"white",backgroundColor:"black",fontWeight:"2px",border:"2px solid white",cursor:"pointer"}}>Click to update</button>
   <br></br>
    </div>
  )
}

export default UserEdit
