import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import {useContext, useRef} from "react";

import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import {NormalTextfield} from "../Components/NormalTextfield";
import NormalButton from "../Components/NormalButton";

export default function LoginPage(){
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const db = getFirestore();

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [currentPage, setCurrentPage] = useContext(CurrentPageContext);

    return(
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <h1>Login test</h1>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                rowGap: "5vh",
                marginTop: "10vh"
            }}>
                <NormalTextfield label={"email"} ref={usernameRef} style={{width: "60vw"}}/>
                <NormalTextfield label={"password"} ref={passwordRef} style={{width: "60vw"}}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "5vw",
                marginTop: "5vh",
                marginBottom: "5vh"
            }}>
                <NormalButton onClick={() => {
                    signInWithEmailAndPassword(auth, usernameRef.current.value, passwordRef.current.value).then(async (creds) => {
                        var uid = creds.user.uid;

                        try {
                            const docRef = await setDoc(doc(db, "users", uid), {
                                test: "test"
                            });
                            console.log("Documented added")
                        } catch (e) {
                            console.error("Error adding document: ", e);
                        }
                    }).catch((error) => {
                        console.log(error.message)
                    })
                }}>Login with email</NormalButton>
                <NormalButton onClick={() => {
                    signInWithPopup(auth, provider).then(async (result) => {
                        const credential = GoogleAuthProvider.credentialFromResult(result);
                        const uid = result.user.uid;

                        try {
                            const docRef = await setDoc(doc(db, "users", uid), {
                                test: "test"
                            });
                            console.log("Documented added")
                        } catch (e) {
                            console.error("Error adding document: ", e);
                        }
                    })
                }}>Login with Google</NormalButton>
            </div>
            <NormalButton onClick={() => {
                setCurrentPage("main")
            }}>Back to main</NormalButton>
        </div>
    )
}
