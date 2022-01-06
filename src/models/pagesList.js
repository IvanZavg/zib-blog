const pagesList = [
  {
    name: 'Все статьи',
    link: '/articles',
    isNavLink: true,
    isAuth: false,
    isAdmin: false,
  },
  {
    name: 'Категории',
    link: '/categories',
    isNavLink: true,
    isAuth: false,
    isAdmin: false,
  },
  {
    name: 'Статья блога',
    link: '/articles/:id',
    isNavLink: false,
    isAuth: false,
    isAdmin: false,
  },
  {
    name: 'Админка',
    link: '/admin',
    isNavLink: true,
    isAuth: true,
    isAdmin: true,
  },
  {
    name: 'Войти',
    link: '/login',
    isNavLink: false,
    isAuth: false,
    isAdmin: false,
  },
  {
    name: 'Регистрация',
    link: '/register',
    isNavLink: false,
    isAuth: false,
    isAdmin: false,
  },
]

export default pagesList
