import React, { useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import './app.css'

const AddUserApi2 = () => {
    const [user,setuser]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        showUserData();
    },[]);
 const url="http://localhost:3000/users";
  async  function showUserData(){
       
        let response=await fetch(url);
        response=await response.json();
        // console.log(response);
        setuser(response);
    }

    //delete user 
    const deleteDetail=async(id)=>{
        let response=await fetch(url+"/"+id,{
            method:"DELETE",
        });
        response=await response.json();
        if(response)
        {
            alert("user deleted");
        }
        showUserData();
    }

//Edit User
const EditUser=(id)=>{
  // console.log(id);
  navigate("/edit/"+id)
}

  return (
    <div>
        <ul className='userData heading'>
            <li>Name</li>
            <li>age</li>
            <li>Email</li>
            <li>Action</li>
        </ul>
      {
        user && user.map((users)=>(
           <ul className='userData' key={users.id}>
            <li>{users.name}</li>
            <li>{users.age}</li>
            <li>{users.email}</li>
            <li><button onClick={()=>deleteDetail(users.id)}>Delete</button>
            <button onClick={()=>EditUser(users.id)}>Edit User</button></li>
           </ul>
        ))
      }
    </div>
  )
}

export default AddUserApi2





