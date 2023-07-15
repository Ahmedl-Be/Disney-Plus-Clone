import {createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Detail from "./components/Detail";

const Layout = ()=>{
  return(
    <>
    <Header />
    <Outlet />
    </>
  )
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path:"/detail/:id",
        element:<Detail />
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
