import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import pagesList from './models/pagesList'

import NavBar from './components/NavBar'

import Admin from './pages/Admin'
import Article from './pages/Article'
import Articles from './pages/Articles'
import Categories from './pages/Categories'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [isAuth, setAuthState] = useState(false)
  const [isAdmin, setAdminState] = useState(false)
  const navbarPages = pagesList.filter((page) => page.isNavLink === true)
  return (
    <>
      <NavBar pages={navbarPages} isAdmin={isAdmin} isAuth={isAuth} />
      <div className="container">
        <Switch>
          <Route exact path="/articles/:id" component={Article} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
        <Redirect to="/articles" />
      </div>
    </>
  )
}

export default App
