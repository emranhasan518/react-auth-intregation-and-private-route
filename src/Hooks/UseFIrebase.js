import { useEffect, useState } from "react"
import initializeAuthentication from "../Componants/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";



initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    const signInUsingGitHub = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    const logout = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect(() =>{
        onAuthStateChanged(auth, user=>{
            if(user){
                // console.log('inside state change', user);
                setUser(user);
            }
        })
    }, [])

    return {
        signUsingGoogle,
        user,
        error,
        logout,
        signInUsingGitHub
    }
}
export default useFirebase;