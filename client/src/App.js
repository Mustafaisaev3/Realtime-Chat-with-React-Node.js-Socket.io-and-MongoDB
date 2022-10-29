import { useState } from 'react';
import './App.css';
import io from 'socket.io-client'
import Chat from './Chat';

const socket = io.connect("http://localhost:3001")

function App() {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')

  const joinRoom = () => {
    if(username !== '' && room !== ''){
      console.log('joim')
      socket.emit('join_room', room)
    }
  }

  return (
    <div className="App">
      <h2>Join into Room</h2>
      <div>
        <input type="text" placeholder='User...' onChange={(e) => setUsername(e.target.value)}/>
        <input type="text" placeholder='Room...' onChange={(e) => setRoom(e.target.value)}/>
        <button onClick={joinRoom}>Join</button>
      </div>
      <Chat socket={socket} username={username} room={room} />
    </div>
  );
}

export default App;
