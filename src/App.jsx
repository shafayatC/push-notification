import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { generateToken, messaging, subscribeToTopic } from './firebase'
import { onMessage } from 'firebase/messaging'

function App() {
  const [count, setCount] = useState(0)
  const [getToken, setToken] = useState(null);

  const tokenFunc = async () => {
    const token = await generateToken();
    setToken(token);
  }
  useEffect(() => {
    tokenFunc();
    subscribeToTopic('testing_one');
    onMessage(messaging, (payload) => {

      console.log(payload);

    })
  }, [])
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline none">
          <span className='text-red-800 font-bold'>Push</span> Notification
        </h1>
        
        <br></br>
        <p id="token" className='text-[8px]'>{getToken}</p>
      </div>
    </>
  )
}

export default App
