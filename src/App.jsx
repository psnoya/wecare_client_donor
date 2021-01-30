import React, { Suspense } from 'react'
import MenuHeader from './components/MenuHeader'
import Footer from './components/Footer'
import './index.css'
import { Route, Switch } from 'react-router-dom'
import MainPageDisplay from './components/MainPageDisplay'
import CreateFoodBagForm from './components/CreateFoodBagForm'
import { useSelector } from "react-redux";

// import DonorDashBoard from './components/DonorDashBoard'

const App = () => {
  const currentUser = useSelector(state => state)

  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <MenuHeader />
        {/* <MainPageDisplay /> */}
        {/* <DonorDashBoard /> */}
        {!currentUser && <CreateFoodBagForm />}

        <Switch>
          <Route exact path='/' component={MainPageDisplay}></Route>
          <Route exact path='/foodbag' component={CreateFoodBagForm}></Route>
        </Switch>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
