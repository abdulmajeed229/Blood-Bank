import { useNavigate } from 'react-router-dom';
import React from 'react';



function NotFound(){

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-[70px] font-bold text-red-500">404</h1>
        <p className="mt-2 text-lg text-gray-700">Oops! The page you’re looking for doesn’t exist.</p>
       
       <button onClick={()=> navigate('/sign-up') } className="mt-6 inline-block px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg" > Go to Home</button>
      </div>
    </div>
  );
};

export default NotFound;
