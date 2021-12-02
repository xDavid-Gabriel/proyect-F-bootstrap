import {useState, useEffect, createContext} from "react"

import { auth, firebase } from "../config/Firebase";


//Para poder ejecutar las funciones de login, logout y ver el estado del login. 
export const AuthContext = createContext();

const proveedorGoogle = new firebase.auth.GoogleAuthProvider();

export const AuthContextProvider = (props) => {
    
    const [user, setUser] = useState(null);

    const signIn = async () => {
        const rptaGoogle = await auth.signInWithPopup(proveedorGoogle);
    };

    const signOut = () => auth.signOut();


    useEffect(() => {

        return auth.onAuthStateChanged((user) => {
            console.log("usuario visto", user)
            setUser(user)
        });
    }, []);

    return (
        <AuthContext.Provider 
            value= {{user, signIn, signOut}}
        >
            {props.children}

        </AuthContext.Provider>
    )
}