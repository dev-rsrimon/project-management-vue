// Require components (Those components are required but It's editable)
import NotFoundPage from '../pages/404'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ResetPassword from '../pages/auth/Reset'

// Register layout components ( If you want to over right default layout)
import Dashboad from '../layouts/Dashboard.vue'

// Register pages Components
import Home from '../pages/Home'
import About from '../pages/About'

// Register router paths
const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {layout: Dashboad}
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {layout: false}
  },
  {
    path: '/reset-password',
    component: ResetPassword
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

export default routes
