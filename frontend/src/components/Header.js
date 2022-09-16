import React from 'react'
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div>
       <nav className="navbar  navbar-light bg-light navbar-lg  mb-3">
  <div className="container-fluid ">
    {/* <a className="navbar-brand" href="#"> LiveChat</a> */}
     <NavLink className="nav-link  navbar-brand active"  aria-current="page" to="Home">
     <i class="fa-solid fa-comments"></i> 
          LiveChat
        </NavLink>
        {/* <NavLink className="nav-link active" aria-current="page" to="Register">
          Register
        </NavLink> */}
    {/* <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      
      <i className="fas fa-bars" />
    </button> */}
    {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
      {/* <div className="navbar-nav"> */}
        {/* <NavLink className="nav-link active navbar-brand" aria-current="page" to="Register">
          Register
        </NavLink> */}
        <div  className='d-flex justify-content-end'>
        <NavLink className="nav-link active navbar-brand d-flex-end"  aria-current="page" to="Login">
          Login
        </NavLink>
        {/* <NavLink className="nav-link active navbar-brand"  aria-current="page" to="Chat">
          Chat
        </NavLink> */}
        <NavLink className="nav-link active navbar-brand"  aria-current="page" to="Room">
          Room
        </NavLink>
        </div>
        {/* <NavLink className="nav-link active"  aria-current="page" to="Home">
          Home
        </NavLink> */}
       
      {/* </div> */}
    {/* </div> */}
  </div>
</nav>




    </div>
  )
}
export default Header ;