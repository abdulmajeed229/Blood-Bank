import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function toggleMobileMenu(){
        
        setIsMobileMenuOpen(prev => !prev);


    } 

    function UserSignOutButton(){
       
        localStorage.removeItem('user'); 
       
        navigate('/sign-in'); 
    };

    return (
        <nav>
            <div className="h-[70px] w-full bg-white flex justify-between items-center px-4 sm:px-6 md:px-8">
                <ul className="hidden lg:flex gap-10 cursor-pointer text-[13px] justify-center items-center">
                    <li onClick={() => navigate('/Home')}>HOME</li>
                    <li onClick={() => navigate('/Donors')}>DONORS</li>
                    <li onClick={() => navigate('/support-us')}>SUPPORT US</li>
                    <li onClick={() => navigate('/About-us')}>ABOUT US</li>
                    <li onClick={() => navigate('/contact')}>CONTACTS</li>
                    <li><button className="bg-orange-400 h-[33px] w-[80px] text-white">DONATE</button></li>
                    <li><button className="bg-orange-400 h-[33px] w-[80px] text-white" onClick={UserSignOutButton}>SIGN OUT</button></li>
                </ul>

               
                <button
                    className="lg:hidden flex items-center"
                    onClick={toggleMobileMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

           
            <div
                className={`fixed inset-0 bg-white z-50 transform transition-transform ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                } lg:hidden`}
            >
                <div className="flex justify-end p-4">
                    <button
                        className="text-xl"
                        onClick={toggleMobileMenu}
                    >
                        &times;
                    </button>
                </div>
                <ul className="flex flex-col items-center">
                    <li className="py-4" onClick={() => navigate('/Home')}>HOME</li>
                    <li className="py-4" onClick={ () => navigate('/Donors') }>DONORS</li>
                    <li className="py-4" onClick={() => navigate('/support-us')}>SUPPORT US</li>
                    <li className="py-4" onClick={() => navigate('/About-us')}>ABOUT US</li>
                    <li className="py-4" onClick={() => navigate('/contact')}>CONTACTS</li>
                    <li className="py-4"><button className="bg-orange-400 h-[33px] w-[80px] text-white">DONATE</button></li>
                    <li className="py-4"><button className="bg-orange-400 h-[33px] w-[80px] text-white" onClick={UserSignOutButton}>SIGN OUT</button></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
