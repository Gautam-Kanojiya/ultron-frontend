import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignInPage from './pages/sign_in'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignInPage />
    </>
  )
}

export default App
