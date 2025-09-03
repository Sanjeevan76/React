import React from 'react'

const Arrayobject = () => {
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

      <h1>Data with Map</h1>
      <table border={3} style={{color:"white",backgroundColor:"green",border:"2px solid black",padding:"2px"}}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody >
          {
            userdata.map((user)=>(
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))
          }

        </tbody>
      </table>


      <hr></hr>
      <h1>manuel data entry</h1>
      <table border="7">
        <thead>
          <tr>
            <td>Id</td>
            <td>name</td>
            <td>emial</td>
            <td>phone</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>sanjeevan</td>
            <td>sanjeevan@gmail.com</td>
            <td>483756476</td>
          </tr>
          <tr>
            <td>1</td>
            <td>sanjeevan</td>
            <td>sanjeevan@gmail.com</td>
            <td>483756476</td>
          </tr>
          <tr>
            <td>1</td>
            <td>sanjeevan</td>
            <td>sanjeevan@gmail.com</td>
            <td>483756476</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Arrayobject
