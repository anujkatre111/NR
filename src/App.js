import React, { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";


// const parent = React.createElement("div",
//     {id: "parent"},
//     React.createElement("div",{id: "child"},
//         React.createElement("h1",{id: "text"}, "hello bhai this is anuj katre"))
// );

// //JSX 
// const jsxHeading = <h1 id="heading">Namaste React usign jsx</h1>; //jsx is not html in js -> its an HTML like syntax

// //react functional component
// const Title = (
//  <h1>Namaste react functional component 11111</h1>
// );
// const HeadingComponent = () => (
//      <div id="container">
//         {Title}//         <h1>My name is Anuj katre</h1>
        
//      </div>
// )

//we will lazy load grocery lets see
const Grocery = lazy(()=>import("./components/Grocery"));

const Cart = lazy(()=>import("./components/Cart"));


//lets load about us too
const About = lazy(()=>import("./components/About"));


const AppLayout = () =>{
 const [userName, setUserName] = useState();


// /authentication
useEffect(()=>{
    //Make an api call and send username and password
    const data = {
        name: "Anuj katre"
    }
    setUserName(data.name);
},[])

//   console.log(<Body/>);
    return(
        <Provider store={appStore}> 
        <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
        <div className="flex flex-col gap-[64px] app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>} ><About/></Suspense>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>} ><Grocery/></Suspense>
            },
            {
                path: "/cart",
                element: <Suspense fallback={<h1>Loading...</h1>} ><Cart/></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/> 
    },
    
]);

const root1 = createRoot(document.getElementById("root1"));
 

root1.render(<RouterProvider router={appRouter}/>);

