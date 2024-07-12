import './App.css'
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import { useState } from 'react';

function App() {

  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState(null);

  return (
    <>
      {
        chatVisibility ? <Chat socket={socket} /> : <Join setSocket={setSocket} setChatVisibility={setChatVisibility}/>
      }
    </>
  )
}

export default App
