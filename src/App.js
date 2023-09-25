import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestaurantMenu";
import { createBrowserRouter ,Outlet,RouterProvider } from "react-router-dom"; //This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.
import UserContext from "./utils/UserContext";

import {Provider} from "react-redux"
import appStore from "./utils/Store/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
//import Grocery from "./components/Grocery";

//Chunking
//Dynamic Bundling
//Code Splitting
//lazy loadind/ On demand loading

//Syntax for lazy loading
const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {

  const[userName, setUserName] = useState();

    //authentication
    useEffect(()=>{
    //Make an API call and sebd username and password
    const data ={
      name : "Yogesh Sharma"
    };

    setUserName(data.name)
    });

  return (
    
    // this is how you proivde store to the react app
    <Provider store ={appStore}>
      {/* //this is how you modify the userContext value */}
     <UserContext.Provider value ={{loggedInUser: userName, setUserName}}>
     <div className="app">
     <Header />
     <Outlet />
     <Footer />
    </div>
    </UserContext.Provider>
    </Provider>

    //it will only passes the data to header section only , for rest component there will a default value
    // <div className="app">
    // <UserContext.Provider value ={{loggedInUser: userName}}>
    //   <Header />
    //   </UserContext.Provider>
    //  <Outlet />
    // </div>
    
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

      },
       {
        path :"/cart",
        element : <Cart />
       }
    ],
    errorElement : <Error />
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
