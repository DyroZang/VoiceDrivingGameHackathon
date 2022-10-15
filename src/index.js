import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import reportWebVitals from './reportWebVitals'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes 
} from "react-router-dom"
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './menu'
import Game from './game'
import About from './about'
import Navigation from './components/Navigation'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'

function Root() {
  return (
    <div>IM THE ROOT</div>
  )
}

const mainRoutes = [
  {
    path: "/",
    element: <h1>hi</h1>,
    children: [
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ]
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals();

 