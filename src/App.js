import './App.css';
import { BrowserRouter, Route , Routes }  from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Room from './components/Room';
import Home from './components/Home';
import Chat from './components/Chat';
import TimeAgo from 'javascript-time-ago'


// English.
import en from 'javascript-time-ago/locale/en'
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Footer from './components/Footer';

 
function App() {
  TimeAgo.addDefaultLocale(en);
  const url = "http://localhost:5000";
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));
  
  useEffect(() => {
    socket.connect();
  }, []);

  return (
   <div>
         
       <BrowserRouter>
       <Header></Header>
       <Routes>
        <Route element={<Register/>} path="Register"/> 
        <Route element={<Login/>} path="Login"/>
        <Route element={<Room socket={socket}/>} path="Room"/>
        <Route element={<Chat socket={socket}/>} path="Chat"/>
        <Route element={<Home/>} path="/"/>
        <Route element={<Home/>} path="Home"/>
       </Routes>
       <Footer></Footer>
       </BrowserRouter>
         

   </div>
  )
}

export default App
