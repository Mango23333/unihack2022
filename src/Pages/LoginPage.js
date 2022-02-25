import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {useContext, useRef} from "react";

import {CurrentPageContext} from "../Contexts/CurrentPageContext";

export default function LoginPage(){
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [currentPage, setCurrentPage] = useContext(CurrentPageContext);

    return(
        <div>
            <h1>Login test</h1>
            <input type={"text"} ref={usernameRef}/>
            <input type={"text"} ref={passwordRef}/>
            <button onClick={() => {
                signInWithEmailAndPassword(auth, usernameRef.current.value, passwordRef.current.value).then((creds) => {
                    console.log(creds);
                }).catch((error) => {
                    console.log(error.message)
                })
            }}>Login with email</button>
            <button onClick={() => {
                signInWithPopup(auth, provider).then((result) => {
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    console.log(credential)
                    console.log(result)
                })
            }}>Login with Google</button>
            <button onClick={() => {
                setCurrentPage("main")
            }}>Back to main</button>
        </div>
    )
}
