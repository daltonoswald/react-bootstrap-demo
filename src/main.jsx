import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './components/App.jsx'
import Test from './components/Test.jsx'
import Cards from './components/Cards.jsx'
import Alerts from './components/Alerts.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: 'cards',
    element: <Cards />
  },
  {
    path: 'alerts',
    element: <Alerts />
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
