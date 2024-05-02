import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import Game from './componentes/Game.jsx'
import Home from './componentes/Home/Home.jsx'

const paths = createBrowserRouter([
  {
      path: '/',
      element: <App/>,
      children: [
        {
          path: '/',
          element: <Home />,
          errorElement: <div>404 Not Found</div>
        },
        {
          path: '/game/:idGame',
          element: <Game />
        }
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={paths}/>
    </Provider>
  </React.StrictMode>,
)