import React, { useState } from 'react'

const ObjectUpd = () => {
    
    const [data,setdata]=useState({
        name:"sanjeevan",
        class:"CE",
        address:{
            city:"patna",
            dis:"lakhisarai"
        }
    })
    const handleinput=(val)=>{
        console.log(val);
        //1st way
        // data.name=val;
        // setdata({...data}) //...data ek new object bna dega jisme name ki value chage ho jayegi and baki cheeze constant rhegi
        //2nd way
        let temdata=data;
        temdata.name=val;
        setdata({...temdata})
    }

    //object ke ander object hai usko updtae krne ka tarika
    
    const handlecity=(city)=>{
        console.log(city);
        data.address.city=city;
        console.log(data)
        setdata({...data,address:{...data.address,city}})
    }
  return (
    <div>
      <h1>Updating Object</h1>
     Name: {data.name}<br></br>
     class: {data.class}<br></br>
     city: {data.address.city}<br></br>
     dis: {data.address.dis}
    <br></br>
     <input type="text" placeholder='enter name to change' onChange={(event)=>handleinput(event.target.value)}/>
    
    <br></br>
     <input type="text" placeholder='enter city to change' onChange={(event)=>handlecity(event.target.value)}/>
    
    </div>
  )
}

export default ObjectUpd
