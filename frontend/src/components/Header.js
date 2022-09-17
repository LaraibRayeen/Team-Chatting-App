import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';



const Header = ({children}) => {
   const [loggedin, setloggedin] =  useState(JSON.parse(sessionStorage.getItem('user')));
  
  console.log(loggedin);
  return (
    <div>
      
       <nav className="navbar  navbar-light bg-light navbar-lg  mb-3">
  <div className="container-fluid ">
   
     <NavLink className="nav-link  navbar-brand active"  aria-current="page" to="Home">
     <i class="fa-solid fa-comments"></i> 
          LiveChat
        </NavLink>
       
        <div  className='d-flex justify-content-end'>
        <NavLink className="nav-link active navbar-brand d-flex-end"  aria-current="page" to="Login">
          Login
        </NavLink>
        
         <NavLink className="nav-link active navbar-brand"  aria-current="page" to="Room">
          Room's
        </NavLink>
        

        <div className='d-flex align-items-center'>
        {
         loggedin === null?  
        
         <NavLink className="nav-link active btn  navbar-brand d-flex-end"  aria-current="page" to="Login">
          Login
          </NavLink>
         :
        
           <NavLink className="nav-link   active  btn navbar-brand d-flex-end" onClick={sessionStorage.removeItem("user")}  aria-current="page" >
          Logout
         </NavLink>  
        }

        </div>

        </div>
     
  </div>

</nav>




    </div>
  )
}
export default Header ;