import React, { Suspense } from 'react'
import MenuHeader from './components/MenuHeader'
import Footer from './components/Footer'
import './index.css'
import MainPageDisplay from './components/MainPageDisplay'
import CreateFoodBagForm from './components/CreateFoodBagForm'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <MenuHeader />
        <Switch>
          <MainPageDisplay />
          <Route exact path='/foodbags' component={CreateFoodBagForm}></Route>
        </Switch>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
