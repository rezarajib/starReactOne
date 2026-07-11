import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';

// নতুন নিয়ম অনুযায়ী basename সহ রাউটার তৈরি
export const router = createBrowserRouter(
  [
    {
      path: "/", 
      element: <Root />, 
      errorElement: <ErrorPage />, 
      children: [
        {
          index: true, 
          element: <Home /> 
        }
      ]
    }
  ],
  {
    basename: "/starReactOne" // এটি নিশ্চিত করুন
  }
);