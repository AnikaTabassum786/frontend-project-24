import React, { createContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

export const valueContext = createContext(null)

const RootLayout = () => {
    
    const handleLogin =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleSignup =(email, password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
         
          // ...
          console.log('Has current user',currentUser)
        } else {
          // User is signed out
          // ...
        }
      });

    const contextValues ={
        handleLogin,
        handleSignup
    }
    return (
        <div>
            <valueContext.Provider value={contextValues}>
            <Navbar></Navbar>
              <Outlet></Outlet>
            </valueContext.Provider>
            
        </div>
    );
};

export default RootLayout;