import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestaurantMenu";
import { createBrowserRouter ,Outlet,RouterProvider } from "react-router-dom"; //This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.
//import Grocery from "./components/Grocery";

//Chunking
//Dynamic Bundling
//Code Splitting
//lazy loadind/ On demand loading

//Syntax for lazy loading
const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
     <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    children :[
      {
        path :"/",
        element : <Body />
      },
      {
        path : "about",
        element : <About />
      },
      {
        path : "contact",
        element : <Contact />
      },
      {
        path : "/grocery",
        element :<Suspense fallback = {<h1>Loading..</h1>}> 
        <Grocery /></Suspense>
      },
      {
        path : "/restaurants/:resId", // resId will be dynamic
        element : <RestrauntMenu />

      }
    ],
    errorElement : <Error />
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
