import React, { useState, useEffect } from 'react'

import _ from 'lodash'
import queryString from 'query-string'
import { fakeApi } from '../api/fake_api'

import ArticleCardPreview from '../components/ArticleCardPreview'
import Pagination from '../components/Pagination'

function filterArticles(search, articles) {
  let _articles = _.concat([], articles)
  if (search.categoryId) {
    const categoryId = parseInt(search.categoryId)
    _articles = _articles.filter((article) => article.categoriesId.includes(categoryId))
  }
  return _articles
}

const Articles = ({ isAuth, location }) => {
  const search = queryString.parse(location.search)
  const [articles, setArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const filtredArticles = filterArticles(search, articles)
  const articlesCount = filtredArticles.length
  const pageSize = 5
  const startSlice = (currentPage - 1) * pageSize
  const endSlice = startSlice + pageSize
  const articlesCrop = _.slice(filtredArticles, startSlice, endSlice)

  useEffect(async () => {
    let cleanupFunction = false
    const articles = await fakeApi.fetchArticles()
    if (!cleanupFunction) setArticles(articles)
    return () => (cleanupFunction = true)
  }, [])

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      {' '}
      {articlesCrop.length ? (
        <div className="row">
          {articlesCrop.map((article) => (
            <ArticleCardPreview key={article.id} article={article} isAuth={isAuth} />
          ))}
          <Pagination
            currentPage={currentPage}
            pageSize={pageSize}
            itemsCount={articlesCount}
            handleChangePage={handleChangePage}
          />
        </div>
      ) : (
        'loading...'
      )}
    </>
  )
}

export default Articles
