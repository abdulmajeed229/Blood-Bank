import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../Database/firebase.config';
// import Swal from 'sweetalert2';

function LoginMyAccount() {

    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleLogin() {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem('user', 'true');
               
                // Swal.fire({
                //     title: "Login Successful",
                //     icon: "success"
                //   });

alert('Login Successful');
                navigate('/Home');


            })
            .catch((error) => {
                const errorMessage = error.message;
        
                // Swal.fire({
                //     title: "Login Failed",
                //     icon: "error"
                //   });
                
                alert('Failed');
            });
    }

    return (
        <div className="relative w-full h-screen bg-gray-100">
            <img
                className="absolute inset-0 object-cover w-full h-[40%] md:h-[50%]"
                src="./images/image.jpg"
                alt="Background"
            />

            <div className="absolute top-5 left-5 md:top-10 md:left-10 text-white px-4 md:px-6">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Give Blood</h1>
                <h2 className="text-sm md:text-lg lg:text-xl mt-2">Patients need your help</h2>
            </div>

            <div className="flex flex-col items-center justify-center absolute bottom-5 left-0 right-0 px-4 md:px-8">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                    <h1 className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold">Blood Donate</h1>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="block w-full p-3 mb-3 border border-orange-200 rounded-md outline-none focus:border-orange-400"
                    />
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="block w-full p-3 mb-4 border border-orange-200 rounded-md outline-none focus:border-orange-400"
                    />
                    <button
                        onClick={handleLogin}
                        className="w-full p-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none"
                    >
                        Login Account
                    </button>

                    <div className='flex justify-between items-center p-5'>
                        <a className='cursor-pointer hover:text-blue-500' onClick={() => navigate('/Sign-up') }>Create account</a>

                        <a href="#" className='cursor-pointer hover:text-blue-500'>Forgot Password</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginMyAccount;
