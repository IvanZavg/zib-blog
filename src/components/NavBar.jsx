import React, { useEffect } from 'react'
import SideNav from './SideNav'

import LogInLink from './LogInLink'
import LoggedUserIntro from './LoggedUserIntro'

function filterPagesLinks(page, isAuth, isAdmin) {
  if (page.isAuth && page.isAuth !== isAuth) {
    return false
  } else if (page.isAdmin && page.isAdmin !== isAdmin) {
    return false
  } else {
    return true
  }
}

const NavBar = ({ pages, isAuth, isAdmin }) => {
  let sideNavElem, instance
  const links = pages
    .filter((page) => filterPagesLinks(page, isAuth, isAdmin))
    .map((page) => ({ name: page.name, link: page.link }))

  useEffect(() => {
    sideNavElem = document.querySelectorAll('.sidenav')
    instance = M.Sidenav.init(sideNavElem, {})
  })

  return (
    <>
      <nav className="navbar brown darken-3">
        <div className="nav-wrapper">
          <div className="navbar-left">
            <a className="brand-logo center">
              ZiBlog <i className="material-icons">import_contacts</i>
            </a>
            <ul id="nav-mobile" className="left">
              <li>
                <a data-target="slide-out" className="show-on-large sidenav-trigger">
                  <i className="material-icons">menu</i>
                </a>
              </li>
            </ul>
          </div>
          <ul className="right hide-on-small-only">
            <li>
              {isAuth && <LoggedUserIntro userData={{ name: 'ivan' }} />}
              {!isAuth && <LogInLink link="/login" />}
            </li>
          </ul>
        </div>
      </nav>
      <SideNav bgImageName="wooden-background.jpg" {...{ links, isAuth }} />
    </>
  )
}

export default NavBar
