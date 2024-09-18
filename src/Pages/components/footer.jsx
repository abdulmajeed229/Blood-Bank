import React from "react";

function Footer() {

    
    return (

        <footer className="min-h-[70px] w-full bg-black text-white p-4 sm:p-5 lg:p-6 font-light">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <span className="text-sm sm:text-base">© 2019 Transport. All rights reserved</span>
                
                <ul className="flex flex-col sm:flex-row justify-start gap-4 mt-4 sm:mt-0">
                    <li className="hover:underline cursor-pointer">Home</li>
                    <li className="hover:underline cursor-pointer">Donate Blood</li>
                    <li className="hover:underline cursor-pointer">Donors</li>
      
                    <li className="hover:underline cursor-pointer">Support Us</li>
                    <li className="hover:underline cursor-pointer">About Us</li>
                    <li className="hover:underline cursor-pointer">Contact</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
