import React, { useState } from 'react'

const Chat = ({socket, username, room}) => {
  const [currentMessage, setCurrentmessage] = useState()

  const sendMessage = async () => {
    if(currentMessage !== ''){
        const sendData = {
            room: room,
            author: username,
            message: currentMessage,
            date: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
        }

        await socket.emit('send_message', sendData)
    }
  }

  return (
    <div>
        <div className='chat-header'>
            <p>Live chat</p>
        </div>
        <div className='chat-body'></div>
        <div className='chat-footer'>
            <input type="text" placeholder='Hey...' onChange={(e) => setCurrentmessage(e.target.value)} />
            <button onClick={sendMessage}>&#9658;</button>
        </div>
    </div>
  )
}

export default Chat