import categories from './categories'

const articles = [
  {
    id: '1',
    title: 'Article1',
    categoriesId: [1, 2],
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam officia iusto expedita eaque officiis cumque corrupti adipisci odio ad harum.',
    dateCreate: '',
  },
  {
    id: '2',
    title: 'Article2',
    categoriesId: [3],
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, sed. Recusandae harum beatae asperiores voluptatum eaque eum voluptatem consectetur iure consequuntur!',
    dateCreate: '',
  },
  {
    id: '3',
    title: 'Article3',
    categoriesId: [4],
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto repellendus sed ipsa fuga facilis ea.',
    dateCreate: '',
  },
  {
    id: '4',
    title: 'Article4',
    categoriesId: [2],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit illo reiciendis eveniet architecto adipisci aliquid molestiae veniam, quas maxime, commodi rerum tempora. Commodi, maxime.',
    dateCreate: '',
  },
  {
    id: '5',
    title: 'Article5',
    categoriesId: [1, 4],
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe odit dicta in minus sit nihil iste! Quae, cumque!',
    dateCreate: '',
  },
  {
    id: '6',
    title: 'Article6',
    categoriesId: [1, 2, 3],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui modi maxime nisi hic. Veniam minus dolorem voluptas rerum esse!',
    dateCreate: '',
  },
  {
    id: '7',
    title: 'Article7',
    categoriesId: [3],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui modi maxime nisi hic. Veniam minus dolorem voluptas rerum esse!',
    dateCreate: '',
  },
  {
    id: '8',
    title: 'Article8',
    categoriesId: [2, 4],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui modi maxime nisi hic. Veniam minus dolorem voluptas rerum esse!',
    dateCreate: '',
  },
  {
    id: '9',
    title: 'Article9',
    categoriesId: [2, 3],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui modi maxime nisi hic. Veniam minus dolorem voluptas rerum esse!',
    dateCreate: '',
  },
  {
    id: '10',
    title: 'Article10',
    categoriesId: [1],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui modi maxime nisi hic. Veniam minus dolorem voluptas rerum esse!',
    dateCreate: '',
  },
]

function fetchArticles() {
  const _articles = articles.map((article) => {
    article.categories = getArticleCategories(article.id)
    return article
  })

  return new Promise((res) => {
    setTimeout(() => res(_articles), 1000)
  })
}

function fetchArticleById(id) {
  const article = articles.find((article) => article.id === id)
  article.categories = getArticleCategories(article.id)

  return new Promise((res) => {
    setTimeout(() => res(article), 1000)
  })
}

function getArticleCategories(articleId) {
  const articleCategoriesId = articles.find((article) => article.id === articleId).categoriesId
  const articleCategories = categories.filter((category) =>
    articleCategoriesId.includes(category.id)
  )
  return articleCategories
}

export { fetchArticles, fetchArticleById }
