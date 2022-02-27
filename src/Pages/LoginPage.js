import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import {useContext, useRef} from "react";
import { Typography } from '@mui/material';
import GoogleLogo from './kisspng-google-logo-google-search-google-account-redes-5ad81f9d785f93.4350404715241133094931.jpg';

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
            margin: "10vh 20vw 0vw 20vw",
            display: "flex",
            justifyContent: "centre",
            alignContent: "centre",
            flexDirection: "column",
        }}>
            <h1>Login</h1>
            <div style={{
                backgroundColor: "#FFFCD6",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                rowGap: "2vh",
                height: "40vh",
                padding: "2vh 2vw 2vh 2vw",           
                }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    rowGap: "1vh",
                }}>
                    <NormalTextfield label={"Email"} ref={usernameRef} style={{width: "40vw"}}/>
                    <NormalTextfield label={"Password"} ref={passwordRef} style={{width: "40vw"}}/>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    rowGap: "1vw",
                }}>
                    <NormalButton 
                        style={{
                            backgroundColor: "black", 
                            width: "40vw", 
                            height: "5vh",
                            color: "white"}}
                        onClick={() => {
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
                    }}>
                        <Typography
                            sx = {{
                            fontFamily:'Nunito',
                            color: "white",
                            fontSize: "200%",
                            }}>
                            Login with Email
                        </Typography>
                    </NormalButton>
                    <NormalButton 
                        style={{
                            backgroundColor: "black", 
                            width: "40vw", 
                            height: "5vh",
                            color: "white"}}
                        onClick={() => {
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
                    }}>
                        <Typography
                            sx = {{
                            fontFamily:'Nunito',
                            color: "white",
                            fontSize: "200%"
                        }}>
                            Login with Google
                        </Typography>
                        <img 
                        style={{
                            paddingLeft: "1vw",
                            height: "2vh"
                        }}
                        src={GoogleLogo} alt=""/>
                    </NormalButton>
                    <NormalButton 
                        style={{
                            backgroundColor: "black", 
                            width: "40vw", 
                            height: "5vh",
                            color: "white",
                            marginTop: "3vh"}}
                        onClick={() => {
                        setCurrentPage("main")
                    }}>
                        <Typography
                            sx = {{
                            fontFamily:'Nunito',
                            fontSize: "200%",
                            color: "white",
                            }}>
                            Back to Main
                        </Typography>
                    </NormalButton>
                </div>
            </div>
        </div>
    )
}
