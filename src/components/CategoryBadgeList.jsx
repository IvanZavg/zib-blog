import React from 'react'
import CategoryBadge from './CategoryBadge'

const CategoryBadgeList = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => (
        <CategoryBadge key={category.id} category={category} />
      ))}
    </div>
  )
}

export default CategoryBadgeList
