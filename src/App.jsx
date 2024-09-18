import { RouterProvider } from 'react-router-dom';
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from './Pages/NotFound';
import CreateAcount from './Pages/CreateAccount';
import Home from './Pages/Home';
import LoginMyAccount from './Pages/LoginAccont';
import Contact from './Pages/contact';
import AboutUS from './Pages/aboutUs';
import SupportUs from './Pages/components/suppoerUs';
import Donors from './Pages/donors';





function App(){

  const router = createBrowserRouter([

    { path: "/sign-up", element: <CreateAcount/> } ,
    
    { path: "/sign-in", element: < LoginMyAccount/> },

    { path: "*", element: <NotFound/> },
    

    { path: "/Home", element: <Home/> },


    { path: "/contact", element: <Contact/>}, 

    { path: "/About-us", element: <AboutUS/> },

    { path: "/support-us", element: <SupportUs/> },

    { path: "/Donors", element: <Donors/> },

  
   


  ]);

  return(

    <RouterProvider router={router} />
  )
}

export default App;