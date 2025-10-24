import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import NewsBord from './Components/NewsBord.jsx'

function App() {

  const [ category, setCategory ] = useState('general')

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBord category={category} />
    </>
  )
}

export default App
