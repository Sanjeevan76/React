import React from 'react'

const NestedLoop2 = ({data}) => {
    console.log(data);
  return (
    <>
    <div>
            <h4>{data.name}</h4>
                <ul>
                    <li>{data.location}</li>
                    <li>{data.website}</li>
                   
                </ul>
               
    </div>
     <div style={{color:"black",backgroundColor:"green"}}>
                    {
                        data.student.map((student)=>(
                            <h4>{student.name}</h4>
                        ))
                    }
                </div>
    </>
  )
}

export default NestedLoop2
