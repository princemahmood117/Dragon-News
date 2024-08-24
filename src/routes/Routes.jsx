

import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DetailsNews from "../pages/DetailsNews";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";


// Loader for fetching a specific news item
const fetchNewsById = async ({ params }) => {
  const newsResponse = await fetch('/news.json');
  const allNews = await newsResponse.json();
  return allNews.find(news => news._id === params.id);  // Find news by ID
};



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path : '/',
            element : <Home></Home>,
            loader : () => fetch('/news.json'),
        },
        {
          path : '/news/:id',
          element : <PrivateRoute> <DetailsNews></DetailsNews> </PrivateRoute>,
          loader:fetchNewsById,
        },
        {
          path : '/login',
          element : <Login></Login>,
        },
        {
          path : '/register',
          element : <Register></Register>,
        },

      ]
    },
  ]);

  export default router;




