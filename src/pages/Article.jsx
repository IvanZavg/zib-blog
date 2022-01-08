import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fakeApi } from '../api/fake_api'

import CategoryBadgeList from '../components/CategoryBadgeList'

const Article = () => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)

  useEffect(async () => {
    let cleanupFunction = false
    const article = await fakeApi.fetchArticleById(id)
    if (!cleanupFunction) setArticle(article)
    return () => (cleanupFunction = true)
  }, [])

  return (
    <>
      {article ? (
        <>
          <CategoryBadgeList categories={article.categories} />
          <h1>{article.title}</h1>
          <p>{article.text}</p>
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  )
}

export default Article
