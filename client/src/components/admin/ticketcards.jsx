import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
//import { eventDetails } from '../../../../server/controllers/eventcontroller'
//import { eventDetails } from '../../../../server/controllers/eventcontroller'

const Ticketcard = ({ticket}) => {
  const navigate=useNavigate()
const deleteEvent=(ticketId)=>{
    try {
        axios.delete(`http://localhost:4000/api/v1/ticket/delete/${ticketId}`).then((res)=>{
            console.log(res)
            alert('ticket deleted succefully')
           navigate("/admin") 

        }).catch((err)=>{
            console.log(err)
        })
    } catch (error) {
        console.log(error)
        alert(error)
        
    }

}
  
  return (
    <div className=" bg-base-100  shadow-sm centre flex items-center w-full">
    <div className="card-body">
    
    <p>Type:{ticket.tickettype}</p>
    <p>email:{ticket.email}</p>
    <p>eventname:{ticket.eventname}</p>



        <div className="card-actions justify-end">
      <button className="btn btn-primary"  onClick={()=>deleteEvent(ticket._id)}>Delete</button>
    </div>
  </div>
</div>
  )
}

export default Ticketcard