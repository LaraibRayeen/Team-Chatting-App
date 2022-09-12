import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import './Chat.css';
import logo from './pattern.png'; 
import TimeAgo from 'javascript-time-ago'

const Chat = ({socket}) => {
  
  
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
      
    {/* <img src={logo}/> */}
      <div className="card  overflow-auto col-md-10 mx-auto ">
        {/* <img
          src=""
          className="card-img-top img-fluid"
          alt="img"/> */}
        <div className="card-body">
          <h5 className="rounded p-3 mb-2 card-title bg-primary  text-white">ChatApp</h5>
      

        <div className="chat-area"> {showMsglist()} </div>

        <div className="card-footer">
          <div className="form-outline d-flex bd-highlight   ">
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
              class="btn btn-primary  p-2 flex-shrink-1 bd-highlight"
              type="submit"
              onClick={sendMsg}
            >
              {" "}
              Send{" "}
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
