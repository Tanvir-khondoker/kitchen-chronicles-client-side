/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main.jsx';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
