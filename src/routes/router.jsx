import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home/Home";
import EstateDetails from "../pages/Estates/Estate/EstateDetails/EstateDetails";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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