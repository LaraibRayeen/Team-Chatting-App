import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import './Chat.css';
import logo from './pattern.png'; 
import TimeAgo from 'javascript-time-ago'

const Chat = ({socket, selRoom}) => {
  
  console.log(selRoom);
  const timeAgo = new TimeAgo('en-US')
  const [msgList, setMsgList] = useState([]);
  const [msgText, setMsgText] = useState("");

  

  socket.on("recmsg", (data) => {
    console.log(data);
    setMsgList([...msgList, data]);
    
  });
    const sendMsg = () => {
    const obj = { text: msgText, createdAt: new Date(), sent: true };
    setMsgList([...msgList, obj]);
    socket.emit("sendmsg", obj);
  };

  const showMsglist = () => {
    return msgList.map((obj) => (
      <div className={obj.sent ? 'sent-msg' : 'rec-msg'} >
        <p> {obj.text} </p>
        <p>{timeAgo.format(new Date(obj.createdAt))}</p>
      </div>
    ));
  };
  const mystyle={
    backgroundImage:`url(${logo})`,
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return (
 <div style={mystyle}>

    <div className="container shadow-lg  mt-15 p-3 mb-5 bg-white rounded">
      
      <h3>{selRoom}</h3>
      <div className="card  col-md-10 mx-auto ">
        
        <div className="card-body">
       

          <h5 className="rounded p-3 mb-2 card-title bg-primary  text-white">
         
         
            <i class="fa-solid fa-comments"></i> 
            LiveChat</h5>
          

        <div className="chat-area overflow-auto "> {showMsglist()} </div>

        <div className="card-footer">
          <div className="form-outline d-flex bd-highlight">
            <input
              type="text"
              id="typeText"
             
              onChange={(e) => setMsgText(e.target.value)}
              className="form-control p-2 w-100 bd-highlight"
            />
            <label className="form-label" for="typeText">
              {" "}
              type your message{" "}
            </label>

            <button
              class="btn btn-primary btn-lg"
              type="submit"
              onClick={sendMsg}
            >
             
              <i class="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Chat;
