import React, { useState } from 'react';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import './Layout.css';
import Menu from '../Menu/Menu';
import { ThemeProvider } from './Context';

export default function Layout({ children }) { 
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(prevToggle => !prevToggle);
    }

    return (
        <div className='d-flex vh-100'>
            <div className={`sidebar ${toggle ? 'sidebar-toggle' : ''}`}>
                <div className='sidebar-toggle-icons' onClick={handleToggle}>
                    {toggle ? <BsChevronRight size={30} /> : <BsChevronLeft size={30} />}
                </div>
                <Menu toggle={toggle} />
            </div>
            <div className='main-content flex-grow-1'>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </div>
        </div>
    );
}
