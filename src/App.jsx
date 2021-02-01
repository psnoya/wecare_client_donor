import React, { Suspense } from 'react'
import MenuHeader from './components/MenuHeader'
import Footer from './components/Footer'
import './index.css'
import MainPageDisplay from './components/MainPageDisplay'
import CreateFoodBagForm from './components/CreateFoodBagForm'
import { useSelector } from 'react-redux'
import ProfileForm from './components/ProfileForm'

const App = () => {
  const currentUser = useSelector(state => state.currentUser)

  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <MenuHeader />
        {currentUser ? <CreateFoodBagForm /> : <MainPageDisplay />}
        <ProfileForm />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
