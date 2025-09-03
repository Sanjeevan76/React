import React from 'react'
import NestedLoop2 from './NestedLoop2'

const NestedLoop = () => {
    const collegeData=[
      {
        name:"ymca",
        location:"faridabad",
        website:"ymca.com",
         student: [
                {
                    name:"sanjeevan",
                    roll_no:"22001050019",
                    course:"ce",
                },
                 {
                    name:"sanjeevan",
                    roll_no:"22001050019",
                    course:"ce",
                },
                 {
                    name:"sanjeevan",
                    roll_no:"22001050019",
                    course:"ce",
                }
            ]
      },
      {
        name:"jbmc",
        location:"gujrat",
        website:"jbmc.com",
         student: [
                {
                    name:"sanjeevan",
                    roll_no:"22001050019",
                    course:"ce",
                },
                 {
                    name:"sanjeevan",
                    roll_no:"22001050019",
                    course:"ce",
                },
                 {
                    name:"sanjeevan",
                    roll_no:"22001050019",
                    course:"ce",
                }
            ]
      },
      {
        name:"IIt",
        location:"Delhi",
        website:"iit.com",
         student: [
                {
                    name:"sanjeevan",
                    roll_no:"22001050019",
                    course:"ce",
                },
                 {
                    name:"sanjeevan",
                    roll_no:"22001050019",
                    course:"ce",
                },
                 {
                    name:"sanjeevan",
                    roll_no:"22001050019",
                    course:"ce",
                }
            ]
      },
      {
        name:"Nit",
        location:"Bihar",
        website:"Nit.com",
         student: [
                {
                    name:"sanjeevan",
                    roll_no:"22001050019",
                    course:"ce",
                },
                 {
                    name:"sanjeevan",
                    roll_no:"22001050019",
                    course:"ce",
                },
                 {
                    name:"sanjeevan",
                    roll_no:"22001050019",
                    course:"ce",
                }
            ]
      },
            
    ]
  return (
    <div>
      {
        collegeData.map((data,index)=>(
            <div key={index} style={{backgroundColor:"pink",color:"white",padding:"2px",margin:"2px",borderBottom:"2px solid black",width:"200px"}}>
            <NestedLoop2 data={data}/>
            </div>
        )
        )
      }
    </div>
  )
}

export default NestedLoop
