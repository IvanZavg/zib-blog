import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import pagesList from './models/pagesList'

function App() {
  const [isAuth, setAuthState] = useState(false)
  const [isAdmin, setAdminState] = useState(false)
  const navbarPages = pagesList.filter((page) => page.isNavLink === true)
  return (
    <>
      <NavBar pages={navbarPages} isAdmin={isAdmin} isAuth={isAuth} />
      <div className="container">
        <Switch>
          {pagesList.map((page) => (
            <Route exact key={page.name} path={page.link} component={page.component} />
          ))}
        </Switch>
        <Redirect to="/articles" />
      </div>
    </>
  )
}

export default App
