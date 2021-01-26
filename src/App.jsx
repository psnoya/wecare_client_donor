import React from 'react'
import { useSelector } from 'react-redux'
import MenuHeader from './components/MenuHeader'
import Footer from './components/Footer'
import './index.css'
import MainPageDisplay from './components/MainPageDisplay'
import RegistrationForm from './components/RegistrationForm'

const App = () => {
  const message = useSelector((state) => state.greeting)
  // const openModal = useSelector(state => state.openModal)
  return (
    <>
      <MenuHeader />
      <MainPageDisplay />
      <RegistrationForm />
      <h1>{message}</h1>
      {/* {openModal && <RegistrationForm/>} */}
      <Footer />
    </>
  )
}

export default App
