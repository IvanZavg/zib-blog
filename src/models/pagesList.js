import Admin from '../pages/Admin'
import Article from '../pages/Article'
import Articles from '../pages/Articles'
import Categories from '../pages/Categories'
import Login from '../pages/Login'
import Register from '../pages/Register'

const pagesList = [
  {
    name: 'Все статьи',
    link: '/articles',
    component: Articles,
    isNavLink: true,
    isAuth: false,
    isAdmin: false,
  },
  {
    name: 'Категории',
    link: '/categories',
    component: Categories,
    isNavLink: true,
    isAuth: false,
    isAdmin: false,
  },
  {
    name: 'Статья блога',
    link: '/articles/:id',
    component: Article,
    isNavLink: false,
    isAuth: false,
    isAdmin: false,
  },
  {
    name: 'Админка',
    link: '/admin',
    component: Admin,
    isNavLink: true,
    isAuth: true,
    isAdmin: true,
  },
  {
    name: 'Войти',
    link: '/login',
    component: Login,
    isNavLink: false,
    isAuth: false,
    isAdmin: false,
  },
  {
    name: 'Регистрация',
    link: '/register',
    component: Register,
    isNavLink: false,
    isAuth: false,
    isAdmin: false,
  },
]

export default pagesList
