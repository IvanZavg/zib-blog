import React from 'react'
import { Link } from 'react-router-dom'

const LogInLink = ({ className, link }) => {
  const setClassName = () => {
    return className ? 'row valign-wrapper' + ' ' + className : 'row valign-wrapper'
  }
  return (
    <div>
      <Link to={link} className={setClassName()}>
        <i className="col small material-icons">input</i>
        Войти
      </Link>
    </div>
  )
}

export default LogInLink
