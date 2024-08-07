import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Loader from "./components/loader";
import Register from "./pages/register";
import Login from "./pages/login";

import Home from "./pages/home";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./style.scss"
import Banner from "./components/banner";
import List from "./components/list";
import List2 from "./components/list2";
import List3 from "./components/list3";
import Banner2 from "./components/banner2";
import Banner3 from "./components/banner3";
import About from "./components/about";
import { useEffect, useState } from "react";



const Layout = () => {
  return (
    <>
      
      <Navbar />
      <Outlet />
      <Banner />
      <List />
      <Banner2 />
      <List2 />
      <Banner3 />
      <List3 />
      <About />
      <Footer />
      
      
      
      

      
      
      
      
      
    </>
  );
};






const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      // {
      //   path: "/post/:id",
      //   element: <Single />,
      // },
      // {
      //   path: "/write",
      //   element: <Write />,
      // },
    ],
  },

  



  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);


//   return isLoading ? (
//     <Loader />
//   ) : (
//     <div className="app">
      
      
//       <div className="container">
          
//          <RouterProvider router={router} />
         
//        </div>
//        <Footer />

      

      
      

      
//     </div>
//   );
// }

  return  (
    
   
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
      
    </div>
        
  );
}


export default App;