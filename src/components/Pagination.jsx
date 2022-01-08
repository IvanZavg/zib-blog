import React from 'react'
import _ from 'lodash'

function defineItemNumber(paginationIndex, currentPage, countPaginationItems, pagesCount) {
  if (pagesCount === countPaginationItems) return paginationIndex

  if (paginationIndex === 1) {
    if ([1, 2, 3].includes(currentPage)) {
      return 1
    } else if (currentPage + 1 === pagesCount) {
      return currentPage - 3
    } else if (currentPage === pagesCount) {
      return currentPage - 4
    } else {
      return currentPage - 2
    }
  } else if (paginationIndex === 2) {
    if ([1, 2, 3].includes(currentPage)) {
      return 2
    } else if (currentPage + 1 === pagesCount) {
      return currentPage - 2
    } else if (currentPage === pagesCount) {
      return currentPage - 3
    } else {
      return currentPage - 1
    }
  } else if (paginationIndex === 3) {
    if ([1, 2, 3].includes(currentPage)) {
      return 3
    } else if (currentPage + 1 === pagesCount) {
      return currentPage - 1
    } else if (currentPage === pagesCount) {
      return currentPage - 2
    } else {
      return currentPage
    }
  } else if (paginationIndex === 4) {
    if ([1, 2, 3].includes(currentPage)) {
      return 4
    } else if (currentPage + 1 === pagesCount) {
      return currentPage
    } else if (currentPage === pagesCount) {
      return currentPage - 1
    } else {
      return currentPage + 1
    }
  } else if (paginationIndex === 5) {
    if ([1, 2, 3].includes(currentPage)) {
      return 5
    } else if (currentPage + 1 === pagesCount) {
      return currentPage + 1
    } else if (currentPage === pagesCount) {
      return currentPage
    } else {
      return currentPage + 2
    }
  }
}

function defineItemClass(currentPage, itemNumber) {
  return currentPage === itemNumber ? 'active' : 'waves-effect'
}

function defineSwitchClass(currentPage, pagesCount, switchDirection) {
  if (switchDirection === 'prev' && currentPage === 1) {
    return 'disabled'
  } else if (switchDirection === 'next' && currentPage === pagesCount) {
    return 'disabled'
  } else {
    return 'waves-effect'
  }
}

const Pagination = ({ currentPage, pageSize, itemsCount, handleChangePage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize)
  const countPaginationItems = pagesCount <= 5 ? pagesCount : 5
  const paginationIdxs = _.range(1, countPaginationItems + 1)

  const handleChoosePage = (event, pageNumber) => {
    event.preventDefault()
    handleChangePage(pageNumber)
  }

  const handleSwitchPage = (event, switchDirection) => {
    event.preventDefault()
    if (switchDirection === 'next' && currentPage < pagesCount) {
      handleChangePage(currentPage + 1)
    } else if (switchDirection === 'prev' && currentPage > 1) {
      handleChangePage(currentPage - 1)
    }
  }

  return (
    <>
      {pagesCount > 1 && (
        <ul className="pagination">
          <li className={defineSwitchClass(currentPage, pagesCount, 'prev')}>
            <a href="/" onClick={(event) => handleSwitchPage(event, 'prev')}>
              <i className="material-icons">chevron_left</i>
            </a>
          </li>
          {paginationIdxs.map((paginationIndex) => {
            const itemNumber = defineItemNumber(
              paginationIndex,
              currentPage,
              countPaginationItems,
              pagesCount
            )
            return (
              <li className={defineItemClass(currentPage, itemNumber)} key={paginationIndex}>
                <a href="/" onClick={(event) => handleChoosePage(event, itemNumber)}>
                  {itemNumber}
                </a>
              </li>
            )
          })}
          <li className={defineSwitchClass(currentPage, pagesCount, 'next')}>
            <a href="/" onClick={(event) => handleSwitchPage(event, 'next')}>
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      )}
    </>
  )
}

export default Pagination
