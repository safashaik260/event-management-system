import React from 'react'
//import { toast } from 'react-toastify'
//import { eventDetails } from '../../../../server/controllers/eventcontroller'
//import { eventDetails } from '../../../../server/controllers/eventcontroller'
//import {loadStripe} from '@stripe/stripe-js';
//const stripe =  loadStripe( import.meta.env.PUBLISHED_KEY_STRIPE);


const Eventcard = ({event}) => {
  // const bookingHandler=async()=>{
  //   try {
  //     const res=await fetch (`http://localhost:4000/api/v1/bookings/checkout_session/${event._id}`,{
  //       method:'post',

  //     })
  //     const data=await res.json()
  //     if(!res.ok){
  //       throw new Error(data.message+'pls try again')
  //     }
  //     if(data.session.url){
  //       window.location.href=data.session.url
  //     }
  //   } catch (error) {
  //     toast.error(error.message)
  //   }
  // }

//}

  // }
  return (
    <div className=" bg-base-100  shadow-sm centre flex items-center w-full">
  <figure>
    <img
      src={event.image}
      alt="img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{event.title}</h2>
    <p>date:{event.eventdate}</p>
    <p>Time:{event.eventtime}</p>
    <p>ticekt price:{event.ticketprice}</p>
    <p>Location:{event.location}</p>
    <p>Event type:{event.eventtype}</p>


        <div className="card-actions justify-end">
      <button className="btn btn-primary">Book ticket</button>
    </div>
  </div>
</div>
  )
}

export default Eventcard