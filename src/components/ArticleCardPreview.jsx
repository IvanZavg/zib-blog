import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCardPreview = ({ article, isAuth }) => {
  return (
    <div className="col s12">
      <div className="card">
        <div className="card-image">
          <img height="100" src="./images/wooden-background.jpg" />
          <span className="card-title">{article.title}</span>
          {isAuth && (
            <a className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </a>
          )}
        </div>
        <div className="card-content">
          <p className="truncate">{article.text}</p>
        </div>
        <div className="card-action">
          <Link to={`articles/${article.id}`}>Открыть</Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleCardPreview
