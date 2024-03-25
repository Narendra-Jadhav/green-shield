import './App.css'
import About from './pages/About'
import CheckDisease from './pages/CheckDisease'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './pages/Products'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/check-disease',
      element: <CheckDisease />
    },
    {
      path: '/products',
      element: <Products />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
