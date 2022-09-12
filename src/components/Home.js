import React from 'react'
import { NavLink , Link } from 'react-router-dom';
import './Home.css'
import img from './Home.png'
import logo from './pattern.png'; 
import Register from './Register';

const mystyle={
    backgroundImage:`url(${logo})`,
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
const Home = () => {
  return (
    <div  style={{backgroundImage:`url(${logo})`}} >

    <div className='container  border border-light'>
        <div className="card">
            <div className="row">
               
                {/* <div className="col-md-12">
                  LiveChat
                </div> */}
                 
                <div className="col-md-6"> 
                  <div className="card-body my-3">
                  <h4 class="card-title text-primary">LiveChat</h4>
                   <p class="card-text">LiveChat can help young people build and develop social skills and gives them a platform to share their skills and help each other out.</p>
                 
                  </div>

                  <div className="card-body my-3">
                  <h4 class="card-title text-primary">Benefits-</h4>
                   <p class="card-text"> * LiveChat can help young people to become more effective non-verbal communicators.</p>
                   <p className='caed-text'> *Reducing the need for face-to-face meetings</p>
                   <p className='card-text'>*appreciate different perspectives</p>
                   <p className='card-text'>*understand the difference between appropriate and inappropriate behaviour</p>

                 
                  </div>
                  <div className="card-body">
                              <Link  to="/Register" className="btn btn-outline-dark text-center ">
                          <i class="fa-solid fa-comment"></i> Create your Room</Link>  
                  </div>
                 




                </div>
                <div className="col-md-6" > 
                <div>
                <img src={img} alt="Girl in a jacket" width={500} height={600} />


               </div>
                
                </div>
               


            </div>
        </div>
    
    </div>
    </div>
  )
}
export default Home ;