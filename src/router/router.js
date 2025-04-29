import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

export  const router = createBrowserRouter([
    {
      path: "/",
     Component:RootLayout,
     children:[
        {
            path:'/',
            Component:Home
        },
        {
            path:'/about',
            Component:About
        },
        {
            path:'/blog',
            Component:Blog
        },
        {
            path:'/sign-in',
            Component:SignIn
        },
        {
            path:'/sign-up',
            Component:SignUp
        }
     ]
    },
  ]);
  