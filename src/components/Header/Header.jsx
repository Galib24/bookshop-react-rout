import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='flex items-center justify-between bg-gray-100'>
            {/* logo section */}
            <Link to='/' className='inline-flex items-center'>
                <BoltIcon className='h-5 w-6 text-blue-700' />
                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                    next Page
                </span>
            </Link>


            {/* nam item section */}
            
            <ul className='items-center hidden space-x-8 lg:flex'>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/books'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Books
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        About us
                    </NavLink>
                </li>
            </ul>

        </div>
    );
};

export default Header;