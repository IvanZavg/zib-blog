import React, { useState, useEffect } from 'react'
import { fakeApi } from '../api/fake_api'

const Articles = ({ isAuth }) => {
  const [articles, setArticles] = useState([])

  useEffect(async () => {
    const articles = await fakeApi.fetchArticles()
    setArticles(articles)
  })

  return (
    <div className="row">
      {articles.map((article) => (
        <div key={article.id} className="col s12">
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
            <div class="card-action">
              <a href="#">Открыть</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Articles
