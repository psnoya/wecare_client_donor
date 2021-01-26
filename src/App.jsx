import React from 'react'
import MenuHeader from './components/MenuHeader'
import Footer from './components/Footer'
import './index.css'
import MainPageDisplay from './components/MainPageDisplay'

const App = () => {
  
  return (
    <>
      <div
        style={{
          background: 'url("./img/weCareBackground.jpeg")',
          backgroundSize: "cover",
          height: "120vh",
      }}
      >
      </div>      
      <MenuHeader />
      <MainPageDisplay />
      <Footer />
    </>
  )
}

export default App
