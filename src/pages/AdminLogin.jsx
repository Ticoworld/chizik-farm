import React, { useState } from "react";
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

    async function handleLogin(e) {
        e.preventDefault()
        const req = await fetch('http://localhost:1337/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }) 
        const res = await req.json();
        console.log(res);
        if(res.admin) {
            localStorage.setItem('token', res.admin)
            window.location.href = '/admin'
            Toast.fire({
                icon: 'success',
                title: 'login succesfull'
            })
        } else {
          Toast.fire({
            icon: 'error',
            title: 'wrong credentials, try again'
        })
        }
        console.log(res);
    }
  return (
    
    <div className="flex items-center justify-center h-[100vh]">
        <form onSubmit={handleLogin} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Admin Login</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="border p-2 w-full"
          type="text"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password:
        </label>
        <div className="relative">
          <input
            className="border p-2 w-full pr-10"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute top-2 right-2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </button>
        </div>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">
        Login
      </button>
    </form>
    </div>
    
  );
};

export default AdminLogin;
