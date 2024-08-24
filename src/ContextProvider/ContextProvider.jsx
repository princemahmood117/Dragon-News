import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null) // creating context

const ContextProvider = ({children}) => {
    

    const [user,setUser] = useState(null);

    const [loading,setLoading] = useState(true) //রিফ্রেশ দিলে যাতে ইউজারের স্টেট না চেঞ্জ হয়

    // checking the state of the user's activity
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user state change',currentUser);
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe();
        }

    },[])

    // create user using email password function
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login using email-password
    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    
    // signout
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    


    const authInfo = {user,createUser,logOut,login,loading};

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;