import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from './pattern.png'; 

 const Room = ({socket, selRoom, setSelRoom}) => {

  const [roomName, setRoomName] = useState("");
  const [RoomList, setRoomList] = useState(['HTML']);

  const navigate = useNavigate();

  console.log(roomName);

  const addNewRoom = () => {
    // socket.emit('joinroom', roomName);
    setRoomList([...RoomList, roomName])
    console.log(RoomList);
 }


 const joinRoom = (room) => {
  socket.emit('joinroom', room);
  setSelRoom(room);
  setTimeout(() => {
    navigate('/Chat');
  }, 1000);
 }

   const showRoomList = ()=> {
     return RoomList.map((roomName) => 
     <div
      className="card mt-5 col-md-4 border border-5">
    <div className="card-body">
      <h5 className="card-title"> {roomName}</h5>
    </div>
    <div className="card-footer">
      {/* <small className="text-muted">tap to chat chat...</small>  */}
      <button type="button" className="btn btn-dark " onClick={e => joinRoom(roomName)}> tap to chat..</button>
    </div>
    </div> );





   }

 
  return (

  <div style={{backgroundImage:`url(${logo})`}}>
  <div className='container mx-auto'>
   
   <div  className='row'>
     <div className='card col-md-10'>
        <div  className='card-body'>
        <div className="form-outline d-flex bd-highlight   ">
            <input
              type="text"

              id="typeText"
              onChange={e => setRoomName(e.target.value)}
              className="form-control p-2 w-100 bd-highlight border shadow-2-strong"
            />
            <label className="form-label" for="typeText">
              {" "}
              type your Room name{" "}
            </label>

            <button
              className="btn btn-primary  p-2 flex-shrink-1 bd-highlight"
              type="submit"
              onClick={addNewRoom}
            >Create Room
        
            </button>
          </div>
              {showRoomList()}
          </div>
       
     </div>

   </div>
  
 



 </div>
 </div>  
)
}
export default Room
