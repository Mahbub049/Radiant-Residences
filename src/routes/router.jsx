import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home/Home";
import EstateDetails from "../pages/Estates/Estate/EstateDetails/EstateDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import BlogCard from "../pages/Blog/BlogDetails/BlogCard/BlogCard";
import Profile from "../pages/Profile/Profile";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/estate/:id',
          element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
          loader: ()=> fetch('/estates.json')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/profileUpdate',
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/blog',
          element: <PrivateRoute><Blog></Blog></PrivateRoute>,
          loader: ()=> fetch('/blogs.json')
        },
        {
          path: '/blogdetails/:id',
          element: <PrivateRoute><BlogCard></BlogCard></PrivateRoute>,
          loader: ()=> fetch('/blogs.json')
        },
        {
          path: '/profile',
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        }
    ]
  },
]);


export default router;