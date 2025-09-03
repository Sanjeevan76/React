import React from 'react'

const Mapargumentfn = ({data}) => {
  return (
    <div>
      <h1 style={{color:"pink"}}>{data.name}</h1>
      <h1>{data.id}</h1>
      <h1>{data.email}</h1>
      <h1>{data.phone}</h1>
      <hr></hr>
    </div>
  )
}

export default Mapargumentfn
