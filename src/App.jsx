import React, { Suspense } from 'react'
import MenuHeader from './components/MenuHeader'
import Footer from './components/Footer'
import './index.css'
import MainPageDisplay from './components/MainPageDisplay'
// import DonorDashBoard from './components/DonorDashBoard'

const App = () => {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <MenuHeader />
        <MainPageDisplay />
        {/* <DonorDashBoard /> */}
        <Footer />
      </Suspense>
    </>
  )
}

export default App
