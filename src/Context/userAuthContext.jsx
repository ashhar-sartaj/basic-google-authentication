import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from './FirebaseConfig'


const UserAuthContext = createContext();
export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState("")
    //function to signup
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //function for login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //function for logout
    const logOut = () => {
        return signOut();
    }
    //function for google sign in
    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }
    //to trigger onAuthChanged()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        //whenevr the component will unmount, we will run this cleanup function in order not to listen to this function anymore
        return () => {
            unsubscribe();
        }

    }, [])
    return (
        <UserAuthContext.Provider value={{user, signup, login, logOut, googleSignIn}}>
            {children}
        </UserAuthContext.Provider>
    )
     
}
//to make our own custom hook for useContext
export function useUserAuth() {
    return useContext(UserAuthContext)
}