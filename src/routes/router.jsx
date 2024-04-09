import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home/Home";
import EstateDetails from "../pages/Estates/Estate/EstateDetails/EstateDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
 
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
          element: <EstateDetails></EstateDetails>,
          loader: ()=> fetch('/estates.json')
        }
    ]
  },
]);


export default router;