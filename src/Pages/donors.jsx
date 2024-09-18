import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import React from 'react';
import { db } from '../Database/firebase.config';
import Navbar from '../Pages/components/navbar';

function Donors() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("user") === null) {
            navigate("/sign-in");
        } else {
            getData();
        }
    }, [navigate]);

    async function getData() {
        const querySnapshot = await getDocs(collection(db, "userData"));
        const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setData(data);
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <div className="p-5 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center">
                            <img
                                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726272000&semt=ais_hybrid"
                                alt="User"
                                className="h-16 w-16 md:h-20 md:w-20 rounded-full mb-4 md:mb-0"
                            />
                            <div className="flex-1 md:ml-4">
                                <h1 className="text-lg font-semibold">{item.name}</h1>
                                <h2 className="text-sm text-gray-600">{item.email}</h2>
                            </div>
                            <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
                                <h1 className="text-sm text-gray-700">{item.gender}</h1>
                                <h1 className="text-sm text-gray-700">{item.bloodGroup}</h1>
                            </div>
                            <div className="flex-1 text-center md:text-right mt-4 md:mt-0">
                                <h1 className="text-sm text-gray-700">{item.number}</h1>
                                <h1 className="text-sm text-gray-700">{item.age}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Donors;
