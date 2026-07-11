import React from 'react';
import { createBrowserRouter } from "react-router"; // আপনি react-router ব্যবহার করছেন
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter(
  [
    {
      path: "/", // মেইন রুট সবসময় '/' দিয়ে শুরু করা স্ট্যান্ডার্ড
      element: <Root />, // মেইন লেআউট কম্পোনেন্টকে element হিসেবে দিতে হয়
      errorElement: <ErrorPage />, // এরর পেজের প্রোপার্টি হবে errorElement
      children: [
        {
          index: true, // index: true মানে হলো মেইন হোমে ঢুকলেই এই পেজটি দেখাবে
          element: <Home /> // Component-এর জায়গায় element ব্যবহার করা রিঅ্যাক্টের স্ট্যান্ডার্ড নিয়ম
        }
      ]
    }
  ],
  {
    basename: "/starReactOne" // এই basename-টি না দেওয়ার কারণেই আপনার গিটহাব পেজেস সাদা হয়ে ছিল
  }
);