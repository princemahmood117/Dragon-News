import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null) // creating context



const ContextProvider = ({children}) => {
    

    const [user,setUser] = useState(null);

    // checking the state of the user's activity
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user state change',currentUser);
            setUser(currentUser)
        })

        return () => {
            unSubscribe();
        }

    },[])

    // signout
    const logOut = () => {
        return signOut(auth);
    }



    // create user using email password function
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login using email-password
    const login = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    


    const authInfo = {user,createUser,logOut,login};

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;