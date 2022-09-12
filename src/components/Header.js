import React from 'react'
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div>
       <nav className="navbar  navbar-light bg-light   mb-3">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#"> LiveChat</a> */}
     <NavLink className="nav-link  navbar-brand active"  aria-current="page" to="Home">
          LiveChat
        </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="Register">
          Register
        </NavLink>
        <NavLink className="nav-link active"  aria-current="page" to="Login">
          Login
        </NavLink>
        <NavLink className="nav-link active"  aria-current="page" to="Chat">
          Chat
        </NavLink>
        <NavLink className="nav-link active"  aria-current="page" to="Room">
          Room
        </NavLink>
        <NavLink className="nav-link active"  aria-current="page" to="Home">
          Home
        </NavLink>
       
      </div>
    </div>
  </div>
</nav>




    </div>
  )
}
export default Header ;