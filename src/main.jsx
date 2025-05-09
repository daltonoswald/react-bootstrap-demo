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
