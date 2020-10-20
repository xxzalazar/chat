import React, {useState} from 'react';
import socket from './components/socket'
import './App.css';
import Chat from './components/chat';

function App() {
  const [username, setUsername]= useState("")
  const [registered, setRegistered]= useState(false)

  const authentication = (e)=>{
      e.preventDefault()
      if(username !== ""){
          setRegistered(true)
      }
  }
  return (
    <div className="App">
      {!registered ?
      <>
      <form onSubmit={authentication} style={{}}>
         <label htmlFor="">Ingrese un nombre:</label>
         <input name="" id="" onChange={e=> setUsername(e.target.value)}/>
         <button>send</button>
      </form>
      </> : <Chat username={username}/>
}
    </div>
  );
}

export default App;
