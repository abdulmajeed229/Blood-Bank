import { useNavigate } from 'react-router-dom';
import { doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from "react";
import { auth } from '../Database/firebase.config';
import { setDoc } from 'firebase/firestore';
import { db } from '../Database/firebase.config';
// import Swal from 'sweetalert2';

function CreateAcount() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");


    function CreateAcountClick(e) {
        e.preventDefault(); 

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                setDoc(doc(db, "userData", user.uid), {
                    name: name,
                    email: email,
                    bloodGroup: bloodGroup,
                    gender: gender,
                    password: password
                    ,
                    number: number ,
                    age: age + " Years"
                });

                localStorage.setItem('user', 'true');


                // Swal.fire({
                //     title: "Create Successful",
                //     icon: "success"
                //   });

                alert('Created Succseeful')

                navigate('/Home');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              
                // Swal.fire({
                //     title: "Create Failed!",
                //     icon: "error"
                //   });

                alert('Failed' )
            });
    }

    return (
        <div className="min-h-screen w-full relative bg-cover bg-center" style={{ backgroundImage: 'url("./images/image.jpg")' }}>
            <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p-6 md:p-10 lg:p-20">
                <div className="text-white">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">Give Blood</h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl mt-2">Patients need your help</h2>
                </div>

                <div className="absolute bottom-0 left-0 w-full flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-10 gap-4 bg-white bg-opacity-80 rounded-t-lg">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Blood Donation</h1>
                    <form className="w-full max-w-md flex flex-col gap-4">
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="h-12 w-full p-3 border-b border-orange-200 outline-none rounded"
                        />
                        <input
                            type="text"
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="+92311XXXXXXX" maxLength={11} min={11}
                            className="h-12 w-full p-3 border-b border-orange-200 outline-none rounded"
                        />
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="h-12 w-full p-3 border-b border-orange-200 outline-none rounded"
                        />


                        <input
                            type="number"
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Enter your Age"
                            className="h-12 w-full p-3 border-b border-orange-200 outline-none rounded"
                        />


                        <select
                            onChange={(e) => setBloodGroup(e.target.value)}
                            className="h-12 w-full p-3 border-b border-orange-200 outline-none rounded"
                        >
                            <option value="" disabled selected>Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        <select
                            onChange={(e) => setGender(e.target.value)}
                            className="h-12 w-full p-3 border-b border-orange-200 outline-none rounded"
                        >
                            <option value="" disabled selected>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="h-12 w-full p-3 border-b border-orange-200 outline-none rounded"
                        />
                        <button
                            type="submit"
                            onClick={CreateAcountClick}
                            className="h-12 w-full bg-orange-600 text-white font-medium rounded hover:bg-orange-700 transition-colors"
                        >
                            Create Account
                        </button>
                        <div className='flex justify-between items-center '>
                            <a onClick={() => navigate('/sign-in')} className=' cursor-pointer hover:text-blue-700'>Already have an account</a>

                            <a href="#" className=' cursor-pointer hover:text-blue-700'>Term and Conditions</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateAcount;
