import React from 'react'
import {useSelector} from 'react-redux'

const App = () => {
  const message = useSelector(state=> state.greeting)
  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App
