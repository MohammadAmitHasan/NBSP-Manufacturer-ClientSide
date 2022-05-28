import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from '../../Images/Icons/icons8-manufactureLogo.png'
import CustomLink from './CustomLink';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false);
    return (
        <nav className='py-2 bg-color flex items-center mx-auto fixed top-0 z-50 w-full px-10 bg-white'>
            <Link to={'/'}>
                <div className='flex w-[120px]'>
                    <img src={logo} className='h-10 ml-2 sm:ml-0' alt="" />
                    <span className='flex items-center text-2xl ml-1 text-primary font-semibold'>NBSP</span>
                </div>
            </Link>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 lg:hidden ml-auto mr-4'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`bg-white z-50 lg:flex justify-end text-center left-0 w-full absolute lg:static duration-300 ease-in ${open ? 'top-14' : 'top-[-400px]'}`}>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/allParts'}>Bicycle Parts</CustomLink>
                <CustomLink to={'/blogs'}>Blogs</CustomLink>                
                {
                    user ?
                        <>
                            <CustomLink to={'/dashboard'}>Dashboard</CustomLink>
                            <CustomLink to={'/login'} onClick={() => signOut(auth)} >Logout</CustomLink>
                        </>
                        :
                        <CustomLink to={'/login'}>Login</CustomLink>
                }
            </ul>
        </nav>

    );
};

export default Navbar;
