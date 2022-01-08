const categories = [
  {
    id: 1,
    title: 'Политика',
    color: 'brown darken-3',
    textColor: 'white-text',
  },
  {
    id: 2,
    title: 'Саморазвитие',
    color: ' teal accent-1',
    textColor: 'black-text',
  },
  {
    id: 3,
    title: 'Философия',
    color: ' purple darken-1',
    textColor: 'white-text',
  },
  {
    id: 4,
    title: 'Програмирование',
    color: ' light-blue darken-2',
    textColor: 'white-text',
  },
]

function fetchCategories() {
  return new Promise((res) => {
    setTimeout(() => res(categories), 1000)
  })
}

function fetchCategoryById(id) {
  const category = categories.find((category) => category.id === id)
  return new Promise((res) => {
    setTimeout(() => res(category), 1000)
  })
}

export { fetchCategories, fetchCategoryById }
export default categories
