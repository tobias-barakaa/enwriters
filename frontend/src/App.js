// import { Form } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Register from "./pages/Register";
import { AddArticle, Admin, AllArticles, DashboardLayout, EditArticle, Error, Login } from "./pages";
import {action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import {loader as dashboardLoader} from './pages/DashboardLayout';
import {loader as adminLoader} from './pages/Admin';
import {loader as allArticlesLoader} from './pages/AllArticles';
import {loader as editArticleLoader} from './pages/EditArticle';
import {action as editArticleAction} from './pages/EditArticle';
import {action as deleteArticleAction} from './pages/DeleteArticle';
import LayoutDisplay from "./pages/LayoutDisplay";
// import AddArticle from './pages/AddArticle';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LayoutDisplay />
      },

      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
    
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
    
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader:dashboardLoader,
        children: [
          {
            index: true,
            element: <AddArticle />,
          },
            
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: 'all-articles',
            element: <AllArticles />,
            loader: allArticlesLoader,
          },
          {
            path: 'edit-article/:id',
            element: <EditArticle />,
            loader: editArticleLoader,
            action: editArticleAction,

          },
          {
            path: 'delete-article/:id',
            action: deleteArticleAction,
          }
        ],
      },


    ]
  }
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  );
}
// tanstackquery
export default App;
