import React from 'react'
import { useSelector } from 'react-redux'
import MenuHeader from './components/MenuHeader'

const App = () => {
  const message = useSelector(state=> state.greeting)
  return (
    <>
      <MenuHeader />
      <h1>{message}</h1>
      
    </>
  )
}

export default App
