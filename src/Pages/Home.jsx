import { useNavigate } from 'react-router-dom';
import React from "react";
import Navbar from "./components/navbar";
import HomeCenter from './components/homecontent';
import Footer from './components/footer';

function Home(){



    const navigate = useNavigate();

    
    return(

        <div className='min-h-[100vh] w-full'>

            <Navbar/>

            <HomeCenter/>

          
             
        </div>
    )


    }

   


export default Home;