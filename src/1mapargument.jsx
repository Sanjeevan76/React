import React from 'react';
import Mapargumentfn from './2mapargumentfn';

const Mapargument = () => {

        const userdata=[
    {
      name:"sanjeevan",
      email:"sanjeevan@gmail.com",
      phone:'44854887346',
      id:'1'
    },
    {
      name:"sanjeevan",
      email:"sanjeevan@gmail.com",
      phone:'44854887346',
      id:'2'
    },
    {
      name:"sanjeevan",
      email:"sanjeevan@gmail.com",
      phone:'44854887346',
      id:'3'
    },
    {
      name:"sanjeevan",
      email:"sanjeevan@gmail.com",
      phone:'44854887346',
      id:'4'
    },

  ]

  return (
    <div>
      {userdata.map((user)=>(
        <div>
           <Mapargumentfn data={user}/>
        </div>
      ))
      }
    </div>
  )
}

export default Mapargument
