import React from 'react'

const LoggedUserIntro = ({ className, userData }) => {
  const { name } = userData
  const setClassName = () => {
    return className ? 'col right' + ' ' + className : 'col right'
  }
  return (
    <div className="row">
      <a href="" className="col valign-wrapper">
        <img width="40" className="left circle" src="./images/user-avatar.png" />
        <span className={setClassName()}> {name}</span>
      </a>
    </div>
  )
}

export default LoggedUserIntro
