import React, { useState } from 'react'

const ArrayUpd = () => {
    const [data,setdata] =useState([
        'sam','sanjeevan','booty'
    ])

        const updatearray=(name)=>{
            console.log(name);
            data[data.length-1]=name;
            setdata([...data]);
        }

        //Array of object
        const [arrayObj,setarrayobj]=useState([
            {name:'sam',age:'23'},
            {name:'sanjeevan',age:'20'},
            {name:'peter',age:'24'}
        ])

        //function to update array object
        const updateage=(age)=>{
            console.log(age);
            arrayObj[arrayObj.length-1].age=age;
            setarrayobj([...arrayObj]);
        }

  return (
    <div>
      <h1>Update Array data</h1>
      <input type="text" placeholder='enter name' onChange={(event)=>updatearray(event.target.value)} />
      {
        data.map((item,index)=>(
            <p key={index}>{item}</p>
        ))
      }
      <hr/>
       <h1>Update Array of object data</h1>
        <input type="text" placeholder='enter last user age' onChange={(event)=>updateage(event.target.value)} />
       {
         arrayObj.map((arrobj,index)=>(
            <p key={index}>{arrobj.name},{arrobj.age}</p>
         ))
       }
    </div>
  )
}

export default ArrayUpd
