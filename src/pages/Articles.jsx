import React, { useState, useEffect } from 'react'

import _ from 'lodash'
import { fakeApi } from '../api/fake_api'

import ArticleCardPreview from '../components/ArticleCardPreview'
import Pagination from '../components/Pagination'

const Articles = ({ isAuth }) => {
  const [articles, setArticles] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const articlesCount = articles.length
  const pageSize = 3
  const startSlice = (currentPage - 1) * pageSize
  const endSlice = startSlice + pageSize
  const articlesCrop = _.slice(articles, startSlice, endSlice)

  useEffect(async () => {
    const articles = await fakeApi.fetchArticles()
    setArticles(articles)
  })

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
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
  )
}

export default Articles
