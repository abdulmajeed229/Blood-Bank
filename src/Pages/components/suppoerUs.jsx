import { useNavigate } from 'react-router-dom';

import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Card from "./card";

function SupportUs() {

    const navigate = useNavigate();
  
    if(localStorage.getItem('user') == null){
        
        navigate('/sign-in')


    }else{
        navigate('/support-us')
    
    }



    return (
        <div>
            <Navbar />

           
            <div className="h-[300px] w-full bg-hero bg-cover bg-center flex justify-start items-center px-4 sm:px-6 md:px-10 lg:px-20">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold ml-4 sm:ml-6 md:ml-10 lg:ml-20">
                    More ways you can <br /> support us
                </h1>
            </div>

            
            <div className="text-center min-h-[80vh] w-full p-6 sm:p-8 md:p-12 lg:p-14">
                <span className="block text-red-500 text-lg md:text-xl lg:text-2xl">________________</span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
                    Support us
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mt-4">
                    Donating funds to help advance our research, pouring juice for blood donors, or hosting a blood drive at
                    <br /> your organization are all ways that you can get involved.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mt-8">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default SupportUs;
