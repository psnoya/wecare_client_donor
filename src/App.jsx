import React from 'react'
import { useSelector } from 'react-redux'
import MenuHeader from './components/MenuHeader'
import Footer from './components/Footer'
import './index.css'
import MainPageDisplay from './components/MainPageDisplay'

const App = () => {
  const message = useSelector((state) => state.greeting)
  return (
    <>
      <MenuHeader />
      <MainPageDisplay />
      <h1>{message}</h1>
      <Footer />
    </>
  )
}

export default App
