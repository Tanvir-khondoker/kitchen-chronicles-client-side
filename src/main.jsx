/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main.jsx';
import ErrorPage from './components/ErrorPage';
import Home from './components/pages/Home';
import Chef from './components/pages/Chef';
import Blog from './components/pages/Blog';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AuthProvider from './providers/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path: "/chefs/:id",
        element: <Chef/>,
        loader: ({params}) =>fetch(`http://localhost:5000/chefs/${params.id}`)
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
)



