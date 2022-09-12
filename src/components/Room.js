import React, { useState } from 'react'

 const Room = ({socket}) => {

  const [roomName, setRoomName] = useState("");

  const joinRoom = () => {
    socket.emit('joinroom', roomName);
  }

  return (
  <div className='container mx-auto'>
   
   <div  className='row'>
     <div className='card col-md-10'>
        <div  className='card-body'>


        <div className="form-outline d-flex bd-highlight   ">
            <input
              type="text"
              id="typeText"
              onChange={e => setRoomName(e.target.value)}
              className="form-control p-2 w-100 bd-highlight"
            />
            <label className="form-label" for="typeText">
              {" "}
              type your Room name{" "}
            </label>

            <button
              class="btn btn-primary  p-2 flex-shrink-1 bd-highlight"
              type="submit"
            >
              {" "}
              Send{" "}
            </button>
          </div>





        </div>
       
     </div>

   </div>
<div className="row">
  
  <div className="card  col-md-4">
    <div className="card-body">
      <h5 className="card-title"> room member 1</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">tap to chat chat...</small>
    </div>
  </div>


  <div className="card  col-md-4">
    <div className="card-body">
      <h5 className="card-title"> room member 2</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">tap to chat...</small>
    </div>
  </div>

  <div className="card  col-md-4">
    <div className="card-body">
      <h5 className="card-title"> room member 3</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">tap to chat....</small>
    </div>
  </div>

  <div className="card  col-md-4">
    <div className="card-body">
      <h5 className="card-title"> room member 4</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">tap to chat...</small>
    </div>
  </div>


  <div className="card  col-md-4">
    <div className="card-body">
      <h5 className="card-title"> room member 5</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">tap to chat...</small>
    </div>
  </div>

  <div className="card  col-md-4">
    <div className="card-body">
      <h5 className="card-title"> room member 6</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">tap to chat....</small>
    </div>
  </div>


  <div className="card  col-md-4">
    <div className="card-body">
      <h5 className="card-title"> room member 7</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">tap to chat...</small>
    </div>
  </div>

  <div className="card  col-md-4">
    <div className="card-body">
      <h5 className="card-title"> room member 8</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">tap to chat chat...</small>
    </div>
  </div>

  <div className="card  col-md-4">
    <div className="card-body">
      <h5 className="card-title"> room member 9</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">tap to chat chat...</small>
    </div>
  </div>



</div>

 </div>
)
}
export default Room
