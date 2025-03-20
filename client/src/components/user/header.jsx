import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { persistor } from '../../redux/store'
import { clearUser } from '../../redux/features/userslice'
import { toast } from 'react-toastify'
import axios from 'axios'

const Header = () => {
     const userData=useSelector((state)=>state.user)
     const dispatch=useDispatch()
     const navigate=useNavigate()
  
     const handleLogout=(e)=>{
      try {
        e.preventDefault();
   axios.post("http://localhost:4000/api/v1/user/logout").then((res)=>{
      console.log(res)
      persistor.purge()
      toast.success('logout succeful')
      dispatch (clearUser())
      navigate('/')
      
   })
   } catch (error) {
        console.log(error)
        
      }
    
     }

    return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li onClick={()=> navigate("/")}><a>Home</a></li>
      <li onClick={()=> navigate("/about")}><a>About</a>
        </li>
        <li onClick={()=> navigate("/events")}><a>Events</a></li>
      <li onClick={()=> navigate("/adminlogin")}><a>Admin Dashboard</a></li>
      
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Event ease</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li onClick={()=> navigate("/")}><a>Home</a></li>
      <li onClick={()=> navigate("/about")}><a>About</a>
        </li>
        <li onClick={()=> navigate("/events")}><a>Events</a></li>
      <li onClick={()=> navigate("/adminlogin")}><a>Admin Dashboard</a></li>
      
    </ul>
  </div>
  <div className="navbar-end">
   {userData.user && Object.keys(userData.user).length>0 ? <div>
    <span>{userData.user.name}</span>
    <button className='btn'onClick={handleLogout}>Logout</button>
   </div>:<a className="btn" onClick={()=>navigate("./login")}>JoinUs</a>}
  </div>
</div>
  )
}

export default Header