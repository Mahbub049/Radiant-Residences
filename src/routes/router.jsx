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
        }
    ]
  },
]);


export default router;