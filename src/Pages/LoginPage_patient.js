import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import {useContext, useRef} from "react";
import { Typography } from '@mui/material';

import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import {NormalTextfield} from "../Components/NormalTextfield";
import NormalButton from "../Components/NormalButton";
import {UserContext} from "../Contexts/UserContext";
import {PatientContext} from "../Contexts/PatientContext";

export default function LoginPage_patient(){

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [currentPage, setCurrentPage] = useContext(CurrentPageContext);
    const [user, setUser] = useContext(UserContext);
    const [patient, setPatient] = useContext(PatientContext)

    const db = getFirestore()

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
                    <NormalTextfield label={"Username"} ref={usernameRef} style={{width: "40vw"}}/>
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
                        onClick={async () => {
                            const patientDocRef = doc(db, "patients", usernameRef.current.value);
                            const patientDocSnap = await getDoc(patientDocRef)

                            if(patientDocSnap.exists()){
                                setPatient(patientDocSnap.data())
                                setCurrentPage("chat")
                            }else{
                                alert("Patient does not exist")
                            }
                        }}
                    >
                        <Typography
                            sx = {{
                            fontFamily:'Nunito',
                            color: "white",
                            fontSize: "200%",
                            }}>
                            Login with Username
                        </Typography>
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
