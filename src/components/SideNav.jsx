import React from 'react'
import { Link } from 'react-router-dom'

import LogInLink from './LogInLink'
import LoggedUserIntro from './LoggedUserIntro'

const SideNav = ({ links, bgImageName, isAuth }) => {
  const bgImage = require(`../assets/images/${bgImageName}`)

  return (
    <>
      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img src={bgImage} alt="" />
            </div>
            {isAuth && <LoggedUserIntro className="white-text" userData={{ name: 'ivan' }} />}
            {!isAuth && <LogInLink className="white-text hide-on-med-and-up" link="/login" />}
            <div style={{ height: '1px' }}></div>
          </div>
        </li>

        {links.map((link) => (
          <li key={link.name}>
            <Link className="waves-effect" to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SideNav
