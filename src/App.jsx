import { useState } from 'react'

import './App.css'
import Blogs from './Pages/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{'background': 'linear-gradient(135deg, #2e3a59, #1e1e1e)'}}>

    <h1  className='text-6xl text-white py-14 typing-animation'>Todays Hot Blogs Here!</h1>
     <Blogs></Blogs>
    </div>
  )
}

export default App
