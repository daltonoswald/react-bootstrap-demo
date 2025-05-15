import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './components/App.jsx'
import Test from './components/Test.jsx'
import Cards from './components/Cards.jsx'
import Alerts from './components/Alerts.jsx'
import Buttons from './components/Buttons.jsx'
import './app.styles.css'
import Forms from './components/Forms.jsx'
import Breadcrumbs from './components/Breadcrumbs.jsx'
import BreadcrumbsCandy from './components/BreadcrumbsCandy.jsx'
import BreadcrumbsCookies from './components/BreadcrumbsCookies.jsx'
import BreadcrumbsIceCream from './components/BreacrumbsIceCream.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: 'alerts',
    element: <Alerts />
  },
  {
    path: 'breadcrumbs',
    element: <Breadcrumbs />
  },
  {
    path: 'breadcrumbs/candy',
    element: <BreadcrumbsCandy />
  },
  {
    path: 'breadcrumbs/cookies',
    element: <BreadcrumbsCookies />
  },
  {
    path: 'breadcrumbs/icecream',
    element: <BreadcrumbsIceCream />
  },
  {
    path: 'buttons',
    element: <Buttons />
  },
  {
    path: 'cards',
    element: <Cards />
  },
  {
    path: 'forms',
    element: <Forms />
  },
  {
    path: "test",
    element: <Test />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
