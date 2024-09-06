import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './pages/donate';
import Donate from './pages/donate';
import Rescue from './pages/rescue/rescue';
import JoinUsForm from './pages/join';
import VisitPage from './pages/visit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/donate",
    element: <Donate/>,
  },
  {
    path: "/rescue",
    element: <Rescue/>,
  },
  {
    path: "/joinus",
    element: <JoinUsForm/>,
  },
  {
    path: "/visit",
    element: <VisitPage/>,
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
