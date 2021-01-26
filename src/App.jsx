import React from 'react'
import { useSelector } from 'react-redux'
import MenuHeader from './components/MenuHeader'
import Footer from './components/Footer'
// import "semantic-ui-css/semantic.min.css";
import "./index.css";


const App = () => {
  const message = useSelector(state=> state.greeting)
  return (
    <>
      <MenuHeader 
      />
      <h1>{message}</h1>
      <Footer 
      color='#ebd2be'/>
    </>

  )
}

export default App
