import React, { Suspense } from 'react'
import MenuHeader from './components/MenuHeader'
import Footer from './components/Footer'
import './index.css'
import MainPageDisplay from './components/MainPageDisplay'
import CreateFoodBagForm from './components/CreateFoodBagForm'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import ProfileForm from './components/ProfileForm'

const App = () => {
  const currentUser = useSelector((state) => state.currentUser)
  const showProfile = useSelector((state) => state.showProfile)

  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <MenuHeader />
        <Switch>
          <Route exact path="/" component={MainPageDisplay}></Route>
          <Route exact path="/foodbag" component={CreateFoodBagForm}></Route>
          <Route exact path="/profile" component={ProfileForm}></Route>
        </Switch>
        <Footer />
      </Suspense>
    </>
  )
}

export default App

// {showProfile == true ? <ProfileForm /> : <MainPageDisplay />}
//         {currentUser && showProfile == false && <CreateFoodBagForm />}
//         <ProfileForm />
//         {currentUser ? <CreateFoodBagForm /> : <MainPageDisplay />}