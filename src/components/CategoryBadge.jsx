import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBadge = ({ category }) => {
  return (
    <Link to={`/articles?categoryId=${category.id}`}>
      <span className={`new badge ${category.color} ${category.textColor}`} data-badge-caption="">
        {category.title}
      </span>
    </Link>
  )
}

export default CategoryBadge
