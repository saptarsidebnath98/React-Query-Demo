import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SuperHeroes from './components/SuperHeroes.page.jsx';
import RQSuperHeroes from './components/RQSuperHeroes.page.jsx';
import Home from "./components/Home.page.jsx"

const router = createBrowserRouter([
      {
        path: '/',
        element: <App />,
        children: [
          {
            index: true, // Default child route for the parent path
            element: <Home/>
          },
          {
            path: 'super-heroes',
            element: <SuperHeroes/>,
          },
          {
            path: 'rq-super-heroes',
            element: <RQSuperHeroes/>,
          },
        ],
      },
    ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
