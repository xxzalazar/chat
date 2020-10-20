import React, { useState, useEffect, useRef } from 'react'
import socket from "./socket"

const Chat = ({username}) => {
    const[message, setMessage]=useState("")
    const[messages, setMessages]=useState([])
    useEffect(()=>{},[])
    const submit= (e)=>{
        e.preventDefault()
       socket.emit("message", username, message)
    }
    const ref = useRef(null)
    useEffect(()=>{
        ref.current.scrollIntoView({behavior:"smooth"})
    },[])
    return (
        <div>
               
        </div>
    );
};

export default Chat;