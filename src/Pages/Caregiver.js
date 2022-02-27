import * as React from 'react';
import {forwardRef, useContext, useEffect, useRef, useState} from "react";
import { styled } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddPatient from '../Components/AddPatientPopup';
import {EditableTextfield} from "../Components/EditableTextfield";
import NormalButton from "../Components/NormalButton";
import AddActivity from "../Components/AddActivities";

import AddVoiceMessage from "../Components/AddVoiceMessage";
import AddTextMessage from "../Components/AddTextMessage";

import axios from "axios";
import {PieChart, Pie} from 'recharts'
import {doc, getDoc, getFirestore} from "firebase/firestore";
import {UserContext} from "../Contexts/UserContext";


export default function Caregiver(){
    const URL = "http://34.129.170.115:3000";

    const [currentPage, setCurrentPage] = useContext(CurrentPageContext);
    const [openAP, setOpenAP] = React.useState(false);
    const handleOpenAP = () => setOpenAP(true);
    const handleCloseAP = () => setOpenAP(false);
    const [patientData, setPatientData] = useState([]);
    const [currentPatient, setCurrentPatient] = useState(null);
    const [chartData, setChartData] = useState([]);
    const [view, setView] = useState("settings")

    const db = getFirestore();
    const [user, setUser] = useContext(UserContext);
    const [voiceData, setVoiceData] = useState([]);
    const [currentVoice, setCurrentVoice] = useState(null);

    const [textData, setTextData] = useState([]);
    const [currentText, setCurrentText] = useState(null);

    //states for editing does there need to be separate ones for each different voice/text and daily activity
    const [openActivity, setOpenActivity] = React.useState(false);
    const handleOpenActivity = () => setOpenActivity(true);
    const handleCloseActivity = () => setOpenActivity(false);

    const [openVoice, setOpenVoice] = React.useState(false);
    const handleOpenVoice = () => setOpenVoice(true);
    const handleCloseVoice = () => setOpenVoice(false);

    const [openText, setOpenText] = React.useState(false);
    const handleOpenText = () => setOpenText(true);
    const handleCloseText = () => setOpenText(false);

    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const medHistRef = useRef(null);
    const voicenameRef = useRef(null);
    const voicedescRef = useRef(null);
    const voicekeywordRef = useRef(null);
    const voicetaskRef = useRef(null);

    const textnameRef = useRef(null);
    const textdescRef = useRef(null);
    const textkeywordRef = useRef(null);
    const texttaskRef = useRef(null);

    useEffect(() => {
        console.log("asdfasdfsadfsdaf")
        async function getData(){
            var patients = []

            const userDocRef = doc(db, "users", user.user.uid)
            const userDocSnap = await getDoc(userDocRef);
            const userData = userDocSnap.data()

            console.log(userData)

            for(var i = 0; i < userData.patients.length; i++){
                var username = userData.patients[i];
                const patientDocRef = doc(db, "patients", username);
                const patientDocSnap = await getDoc(patientDocRef);
                const patientData = patientDocSnap.data()

                patients.push(patientData)
            }

            setPatientData(patients)
        }

        if(user != null){
            getData()
        }
    }, [openAP, openActivity, user])

    useEffect(() => {
        if(currentPatient != null){
            nameRef.current.value = currentPatient.name;
            ageRef.current.value = currentPatient.age;
            medHistRef.current.value = currentPatient.medHistory;

            currentPatient.chats.forEach((chatMsg) => {
                axios.get(`${URL}/emotion?text=${chatMsg}`).then((response) => {
                    var hasFound = false;

                    for(var i = 0; i < chartData.length; i++){
                        var elem = chartData[i];
                        if (elem.name === response.data[0].label){
                            hasFound = true;
                            elem.value += 1;
                        }
                    }

                    if (!hasFound){
                        chartData.push({name: response.data[0].label, value: 1})
                    }

                    setChartData([...chartData])
                })
            })
        }
    }, [currentPatient])



    useEffect(() => {
        setPatientData([{name: "Bob", stage: 1000, age: 52, medHistory: "cancer1, cancer2, cancer3, cancer4, cancer5, cancer6, cancer7, cancer8, cancer9",}])
    }, []

    )
    useEffect(() => {
        setVoiceData([{name: 'Hello', description: 'hello voice message', keyword:'Hello voice', task: 'Hello Bob, I hope you are going well. voice'}])
    }, []
    )

    useEffect(() => {
        setTextData([{name: 'Hello', description: 'hello text message', keyword:'Hello text', task: 'Hello Bob, I hope you are going well. text'}])
    }, []
    )


    console.log(chartData)

    const testData = {
        name: "Bob",
        stage: 1000,
        age: 52,
        medHistory: "cancer1, cancer2, cancer3, cancer4, cancer5, cancer6, cancer7, cancer8, cancer9",
        chats: ["I hate you", "I enjoy eating apples", "I'm really excited for this particular event to happen tomorrow, are you excited?"]
    }

    useEffect(() => {
        setPatientData([testData])
    }, [])


    useEffect(() => {
        if(currentVoice != null){
            voicenameRef.current.value = currentVoice.name;
            voicedescRef.current.value = currentVoice.description;
            voicekeywordRef.current.value = currentVoice.keyword;
            voicetaskRef.current.value = currentVoice.task;
        }

    }, [currentVoice])

    useEffect(() => {
        if(currentText != null){
            textnameRef.current.value = currentText.name;
            textdescRef.current.value = currentText.description;
            textkeywordRef.current.value = currentText.keyword;
            texttaskRef.current.value = currentText.task;
        }

    }, [currentText])


    function PatientCard() {
        const Info = styled(Button)(({ theme }) => ({
            color: '#000000',
            backgroundColor: "#BAD39F",
            fontSize: '2vh',
            height: 120, // TO CHANGE
            width: 200,
            minwidth: '20%', // TO CHANGE
            borderRadius: '12px',
            position: 'relative',

            '&:hover': {
                backgroundColor: "#A6BE8D",
                borderColor: "#000000",
            }
        }));

        return patientData.map((obj) => {
                return (
                    <Info onClick={() => {
                        setCurrentPatient(obj)
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <AccountCircleIcon style={{color: '#ede7e3', fontSize: 40, marginBottom: "1vh"}}/>
                            <Typography>
                                {obj.name} - {obj.age} <br/>
                                Stage {obj.stage}
                            </Typography>
                        </div>
                    </Info>
                )
            });
  }

    function VoiceMessage() {
    const VoiceCard = styled(Button)(({ theme }) => ({
        color: '#000000',
            backgroundColor: "#8AA861",
            borderColor: "2px solid #000000",
            fontSize: '2vh',
            height: 55,
            width: '39vw',
            borderRadius: '12px', //NEED TO ORGANISE
            position: 'relative',
            p: 2,

            '&:hover': {
                backgroundColor: "#BAD39F",
                borderColor: "#000000",
            }
    }));
    return voiceData.map((obj) => {
        return(

            <VoiceCard onclick = {openVoice}>
                <Typography>
                    {obj.name}
                </Typography>
            </VoiceCard>
        )


     });
    }



    function TextMessage() {
        const TextCard = styled(Button)(({ theme }) => ({
            color: '#000000',
            backgroundColor: "#8AA861",
            borderColor: "2px solid #000000",
            fontSize: '2vh',
            height: 55,
            width: '39vw',
            borderRadius: '12px', //NEED TO ORGANISE
            position: 'relative',
            p: 2,

            '&:hover': {
                backgroundColor: "#BAD39F",
                borderColor: "#000000",
            }
        }));

        return textData.map((obj) => {
            return(

                <TextCard onclick = {openVoice}>
                    <Typography>
                        {obj.name}
                    </Typography>
                </TextCard>
            )


        });
    }




    function Activity() {
        const ActivityCard = styled(Button)(({ theme }) => ({
            color: '#000000',
            backgroundColor: "#8AA861",
            borderColor: "2px solid #000000",
            fontSize: '2vh',
            height: 55,
            width: '70vw',
            borderRadius: '12px', //NEED TO ORGANISE
            position: 'relative',
            p: 2,

            '&:hover': {
                backgroundColor: "#BAD39F",
                borderColor: "#000000",
            }
        }));


        return(
            <ActivityCard>
                <Typography>
                    hello
                </Typography>
            </ActivityCard>
        )

    }

    function Overview(){
        return (
            <div>
                <Typography sx={{
                    fontFamily: 'Nunito',
                    fontSize: 20,
                    textAlign: "left",
                    margin: '3vh',
                }}
                >
                    Patients

                </Typography>
                <Box
                    sx={{
                        border: '2px solid #000000', // to remove
                        margin: '5vh',
                        marginLeft: '3vh',
                        marginRight: '3vh',
                        marginTop: '-2vh',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: "row",
                        columnGap: "4.6vw",
                        rowGap: "3vh",
                        justifyContent: 'left',
                        alignContent: 'flex-start',
                        p: 1,
                        overflow: 'auto',
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                    }}>

                    <PatientCard />
                </Box>
                <NormalButton onClick={handleOpenAP}>
                    Add patient
                </NormalButton>
                <AddPatient openpop={openAP} handleClosepop={handleCloseAP}/>
            </div>
        )
    }

    function Detailed(){
        return(
            <div style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}>
                <Box
                    sx={{
                        width: "88vw",
                        height: '70vh',
                        margin: "3vh",
                        border: ' 1px solid rgba(200, 0, 0, 1)',
                        overflow: 'auto',
                    }}>
                    <Box
                        sx={{
                            width: "87vw",
                            height: "35vh",
                            backgroundColor: 'rgba(186, 211, 159, 1)',
                        }}
                    >
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            border: '1px solid #000000'
                        }}>
                            <div style ={{
                                marginLeft: '-5vw'
                            }}>
                                <AccountCircleIcon style={{fontSize: "30vh", marginTop: "2.5vh", marginLeft: "10vw", marginRight: "10vw"}} />
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                border: '1px solid #000000',
                                width: '60vw',
                                marginLeft: '-5vw'
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}>
                                    <Typography sx={{
                                        fontFamily: "Nunito",
                                        fontSize: "4vh"
                                    }}>
                                        Name:
                                    </Typography>
                                    <EditableTextfield multiline style={{backgroundColor: "transparent", marginTop: "1.15vh", fontSize: "4vh", width: "44.1vw"}} inputProps={{
                                        style: {fontSize: "4vh", fontFamily: "Nunito", lineHeight: "4vh", marginTop: "-2.8vh", marginBottom: "-2.8vh"}
                                    }} ref={nameRef}/>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row"
                                }}>
                                    <Typography sx={{
                                        fontFamily: "Nunito",
                                        fontSize: "4vh"
                                    }}>
                                        Age:
                                    </Typography>
                                    <EditableTextfield multiline style={{backgroundColor: "transparent", marginTop: "1.15vh", fontSize: "4vh", width: "45.8vw"}} inputProps={{
                                        style: {fontSize: "4vh", fontFamily: "Nunito", lineHeight: "4vh", marginTop: "-2.8vh", marginBottom: "-2.8vh"}
                                    }} ref={ageRef}/>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row"
                                }}>
                                    <Typography sx={{
                                        fontFamily: "Nunito",
                                        fontSize: "4vh"
                                    }}>
                                        Medical history:
                                    </Typography>
                                    <EditableTextfield multiline style={{backgroundColor: "transparent", marginTop: "1.55vh", fontSize: "4vh", width: "35vw"}} inputProps={{
                                        style: {fontSize: "4vh", fontFamily: "Nunito", lineHeight: "4vh", marginTop: "-2.8vh", marginBottom: "-2.8vh"}
                                    }} ref={medHistRef}/>
                                </div>
                            </div>
                        </div>
                    </Box>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "3vh",
                        columnGap: "7vw"
                    }}>
                        <NormalButton style={{width: "40vw", height: "10vh", fontSize: "4vh", fontFamily: "Nunito"}} onClick={() => {setView("activity")}}>Activity View</NormalButton>
                        <NormalButton style={{width: "40vw", height: "10vh", fontSize: "4vh", fontFamily: "Nunito"}} onClick={() => {setView("settings")}}>Text Settings</NormalButton>
                    </div>
                    {view === "activity" && <ActivityView/>}
                    {view === "settings" && <TextSettings/>}
                </Box>
            </div>

        )
    }

    function TextSettings(){
        return (
            <div>
                <Box
                    sx={{
                        width: "87vw",
                        height: "150vh",
                        backgroundColor: 'rgba(186, 211, 159, 1)',
                        marginTop: "3vh"
                    }}
                >
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "5vh",
                        //border: '1px solid #000000'



                    }}>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                margin: '3vh',
                                border: '1px solid #000000',
                                width: "60vw",
                                height: "65vh",}}>

                            <Typography sx ={{fontFamily: "Nunito",fontSize: "4vh", marginBottom: '1vh'}}>
                                Voice messages
                            </Typography>
                            <div style ={{
                                border: '1px solid #ffffff',
                                width: "39.5vw",
                                height: '50vh',
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                rowGap: '2vh',
                                overflow: 'auto',
                            }}>


                                <VoiceMessage onClick={handleOpenVoice}/>
                                <AddVoiceMessage openpop={openVoice} handleClosepop={handleCloseVoice}/>


                                <VoiceMessage/>


                            </div>
                            <div style ={{
                                border: '1px solid #ffffff',
                                width: "39.5vw",
                                height: '5vh',
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: '1.5vh'}}>

                                <NormalButton onClick={handleOpenVoice} sx ={{height: '6vh', width: '20vw'}} >Add new</NormalButton>
                                <AddVoiceMessage openpop={openVoice} handleClosepop={handleCloseVoice}/>



                            </div>



                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                margin: '3vh',
                                border: '1px solid #000000',
                                width: "60vw",
                                height: "65vh",}}>

                            <Typography sx ={{fontFamily: "Nunito",fontSize: "4vh", marginBottom: '1vh'}}>
                                Text messages
                            </Typography>
                            <div style ={{
                                border: '1px solid #ffffff',
                                width: "39.5vw",
                                Height: '50vh',
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                rowGap: '2vh',
                                overflow: 'auto',
                            }}>
                                <TextMessage/>

                            </div>
                            <div style ={{
                                border: '1px solid #ffffff',
                                width: "39.5vw",
                                height: '5vh',
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: '1.5vh'}}>

                                <NormalButton onClick={handleOpenText} sx ={{height: '6vh', width: '20vw'}}>Add new</NormalButton>
                                <AddTextMessage openpop={openText} handleClosepop={handleCloseText}/>


                            </div>



                        </div>
                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "5vh",
                        marginLeft: '3vh',
                        marginRight: '3vh',
                        border: '5px solid #000000',}}>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                width: "90vw",
                                border: '1px solid #000000',
                                height: "65vh",}}>

                            <Typography sx ={{fontFamily: "Nunito",fontSize: "4vh", marginBottom: '1vh', display: "flex",flexDirection: "row", alignItems: "center",}}>
                                Activities and Reminders
                            </Typography>
                            <div style ={{
                                border: '1px solid #ffffff',
                                width: "100%",
                                height: '50vh',
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                rowGap: '2vh',
                                overflow: 'auto',
                            }}>
                                <Activity/>


                            </div>
                            <div style ={{
                                border: '1px solid #ffffff',
                                width: '100%',
                                height: '5vh',
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: '1.5vh'}}>

                                <NormalButton onClick={handleOpenActivity} sx ={{height: '6vh', width: '20vw'}}>Add new</NormalButton>
                                <AddActivity openpop={openActivity} handleClosepop={handleCloseActivity}/>

                            </div>



                        </div>
                    </div>
                </Box>

            </div>


        )
    }

    function ActivityView(){
        return(
            <Box
                sx={{
                    width: "87vw",
                    height: "65vh",
                    backgroundColor: 'rgba(186, 211, 159, 1)',
                    marginTop: "5vh",
                    marginBottom: "5vh"
                }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "3vw",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "40vw",
                        alignItems: "flex-start",
                        marginLeft: "3vw"
                    }}>
                        <Typography sx={{
                            fontSize: "6vh",
                            fontFamily: "Nunito"
                        }}>
                            {currentPatient.name}'s emotion analysis
                        </Typography>
                        <Box sx={{
                            backgroundColor: "#FFFCD6",
                            width: "30vw",
                            height: "47vh"
                        }}>
                            <div style={{
                                display: "flex",
                                marginTop: "4vh",
                                marginLeft: "-5vw"
                            }}>
                                <PieChart width={window.innerWidth * 0.4} height={window.innerHeight * 0.4}>
                                    <Pie data={chartData} dataKey={"value"} nameKey={"name"} label={(entry) => {
                                        return entry.name
                                    }}/>
                                </PieChart>
                            </div>
                        </Box>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "40vw",
                        alignItems: "flex-start",
                        marginLeft: "3vw"
                    }}>
                        <Typography sx={{
                            fontSize: "6vh",
                            fontFamily: "Nunito"
                        }}>
                            {currentPatient.name}'s chat logs
                        </Typography>
                        <Box sx={{
                            backgroundColor: "#FFFCD6",
                            width: "35vw",
                            height: "47vh"
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "left"
                            }}>
                                {currentPatient.chats.map((chatMsg) => {
                                    return(
                                        <Typography sx={{
                                            fontSize: "2vh",
                                            fontFamily: "Nunito"
                                        }}>
                                            Message: {chatMsg}
                                        </Typography>
                                    )
                                })}
                            </div>
                        </Box>
                    </div>
                </div>
            </Box>
        )
    }

    return(
        <div>
            <div >
                <Typography
                    sx = {{
                        fontFamily: 'Oxygen',
                        fontSize:'260%',
                        color: '#000000',
                        textAlign: "left",
                        marginLeft: '2vw',
                        border: '1px solid #000000',
                    }}>

                    Doctor Page
                </Typography>
            </div>
            <div>
                <Box sx={{
                    border: '2px solid #6A874B',
                    borderRadius: '4px',
                    marginTop: '0.5%',
                    height: '77vh', //70vh
                    flexDirection: 'row',
                    width: '90.6vw',
                    //overflow: 'auto', // to remove
                    marginLeft: '2vw', // adjust
                    backgroundColor: '#FFFCD6',
                }}>
                    {currentPatient == null && Overview()}
                    {currentPatient != null && Detailed()}
                </Box>
            </div>
        </div>
    )
}
