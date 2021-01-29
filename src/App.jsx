import React, { Suspense } from 'react'
import MenuHeader from './components/MenuHeader'
import Footer from './components/Footer'
import './index.css'
import MainPageDisplay from './components/MainPageDisplay'

const App = () => {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <MenuHeader />
        <MainPageDisplay />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
