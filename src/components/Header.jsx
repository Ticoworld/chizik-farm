import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MdSunny, MdNightsStay, MdFacebook } from 'react-icons/md';
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp, IoMdMenu } from "react-icons/io";
import { NavHashLink } from 'react-router-hash-link';


const Header = () => {
        const [theme, setTheme] = useState(null)
        const [isMenuOpen, setIsMenuOpen] = useState(false)
        useEffect(() => {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
              setTheme(storedTheme);
            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
              setTheme('dark');
            } else {
              setTheme('light');
            }
          }, []);

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <div className={`header lg:py-2 px-7 py-3 flex sticky top-0 dark:bg-gray-900 dark:text-white bg-green-500 text-green-950  items-center justify-between z-20`}>
      <div className='dark:bg-white rounded-full'>
            <img src="/logo.png" alt="" className='w-12'/>    
      </div>
      <div className={`lg:flex lg:static lg:bg-transparent lg:justify-between lg:flex-row lg:auto lg:py-1 items-center ${isMenuOpen ? `flex-col absolute right-8 top-16 dark:bg-gray-900 bg-green-400 text-center py-3 rounded z-20` : `hidden`}`}>
       <Link to='/'> <p className='px-20 lg:px-4 lg:py-0 text-green-950 font-semibold py-2 w-full my-1 hover:text-green-800 cursor-pointer dark:text-green-400 dark:hover:text-green-100'>Home</p></Link>
        <div className='line lg:hidden'/>
        <Link to="/about">
           <p className='px-20 lg:px-4 lg:py-0 text-green-950 font-semibold py-2 w-full my-1 hover:text-green-800 cursor-pointer dark:text-green-400 dark:hover:text-green-300'>About</p>
        </Link>
       
        <div className='line lg:hidden'/>
        <Link to='/services'> <p className='px-20 lg:px-4 lg:py-0 text-green-950 font-semibold py-2 w-full my-1 hover:text-green-800 cursor-pointer dark:text-green-400 dark:hover:text-green-100'>Services</p></Link>
        <div className='line lg:hidden'/>
        <Link to="/faq"><p className='px-20 lg:px-4 lg:py-0 text-green-950 font-semibold py-2 w-full my-1 hover:text-green-800 cursor-pointer dark:text-green-400 dark:hover:text-green-300'>FAQ</p></Link>
        <div className='line lg:hidden'/>
        <Link to='/contact'> <p className='px-20 lg:px-4 lg:py-0 text-green-950 font-semibold py-2 w-full my-1 hover:text-green-800 cursor-pointer dark:text-green-400 dark:hover:text-green-100'>Contact</p></Link>
        <div className='line lg:hidden'/>
        <div className='lg:hidden flex items-center justify-center gap-3 px-2 py-3'>
            <MdFacebook className='text-3xl hover:text-green-800  cursor-pointer'/>
            <BsTwitterX className='text-3xl hover:text-green-800  cursor-pointer'/>
            <AiFillInstagram className='text-3xl hover:text-green-800  cursor-pointer'/>
            <IoLogoWhatsapp className='text-3xl hover:text-green-800  cursor-pointer'/>
        </div>
      </div>
      <div className='flex items-center justify-between gap-2'>
        <div className="cursor-pointer" onClick={toggleTheme}>
        {
            theme === "dark" ?  <MdSunny className="text-yellow-400 dark:text-yellow-300 text-2xl" /> : <MdNightsStay className="text-gray-950 text-2xl"/> 
        }
      </div>
      <div>
            <IoMdMenu  className='text-2xl cursor-pointer lg:hidden' onClick={toggleMenu}/>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
