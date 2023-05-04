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
import Blog from './components/pages/BlogPage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './privateRoute';
import TermsCondition from './components/component/TermsCondition';



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
        path:"/terms-condition",
        element:<TermsCondition/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path: "/chefs/:id",
        element:<PrivateRoute><Chef/></PrivateRoute>,
        loader: ({params}) =>fetch(`https://kitchen-chronicles-server-tanvir-khondoker.vercel.app/chefs/${params.id}`)
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
)



