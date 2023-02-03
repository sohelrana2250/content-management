
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from './../firebase/firebase.config';
export const AuthContext = createContext();



const auth = getAuth(app);
const AuthProvider = ({ children }) => {



    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false);


    const createUsers = (email, password) => {

        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);

    }

    const updateUserProfile = (profile) => {
        setLoading(true);

        return updateProfile(auth.currentUser, profile);
    }

    const SingIn = (email, password) => {

        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {


            setUser(currentUser);
            setLoading(false);

        })

        return () => {
            unsubscribe();
        }


    }, [])


    const LogOut = () => {
        setLoading(true);
        return signOut(auth);

    }








    const authInfo = { user, loading, createUsers, updateUserProfile, SingIn, LogOut };


    return (
        <div>
            <AuthContext.Provider value={authInfo}>

                {children}

            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;