//import axios from 'axios'
import axios from 'axios'
import React from 'react'
import {useNavigate } from 'react-router-dom'


const Admineventards = ({event}) => {
    const navigate=useNavigate()
const deleteEvent=(eventId)=>{
    try {
        axios.delete(`http://localhost:4000/api/v1/event/delete/${eventId}`).then((res)=>{
            console.log(res)
            navigate("/admin")
        }).catch((err)=>{
            console.log(err)
        })
    } catch (error) {
        console.log(error)
        
    }

}
  
  return (
    <div className="card card-side bg-base-100 shadow-sm grid-grid-cols-1">
  <figure className='w-full h-full'>
    <img
      src={event.image}
      alt="Movie" className='object-cover-w-full h-full' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{event.title}</h2>
    <p>{event.description}</p>
    

    <div className="card-actions justify-end">
      <button className="btn btn-primary"  onClick={()=>deleteEvent(event._id)}>delete</button>
      <button className="btn btn-primary" onClick={()=>navigate (`/update/${event._id}`,)}>Update </button>
    
    </div>
  </div>
</div>
  )
}

export default Admineventards