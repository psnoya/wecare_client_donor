import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  const state = {
    message: "plut plut"
  }
  // const greeting = useSelector(state => state)
  // const currentState = useSelector(state => state.currentState)

  return (
    <>
      <h1 > {this.state.message} 
      </h1>
    </>
  )
}

export default App;
