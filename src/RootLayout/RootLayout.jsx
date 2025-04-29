import React, { createContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

export const valueContext = createContext()

const RootLayout = () => {
    
    const a=10
    return (
        <div>
            <Navbar></Navbar>

            <valueContext.Provider value={a}>
              <Outlet></Outlet>
            </valueContext.Provider>
            
        </div>
    );
};

export default RootLayout;