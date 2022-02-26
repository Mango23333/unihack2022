import * as React from 'react';
import {forwardRef, useContext, useEffect, useRef, useState} from "react";
import { styled } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {EditableTextfield} from "../Components/EditableTextfield";
import NormalButton from "../Components/NormalButton";

export default function Caregiver(){
    const [currentPage, setCurrentPage] = useContext(CurrentPageContext);
    const [patientData, setPatientData] = useState([]);
    const [currentPatient, setCurrentPatient] = useState(null);

    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const medHistRef = useRef(null);

    useEffect(() => {
        setPatientData([{name: "Bob", stage: 1000, age: 52, medHistory: "cancer1, cancer2, cancer3, cancer4, cancer5, cancer6, cancer7, cancer8, cancer9"}])
    }, [])

    useEffect(() => {
        if(currentPatient != null){
            nameRef.current.value = currentPatient.name;
            ageRef.current.value = currentPatient.age;
            medHistRef.current.value = currentPatient.medHistory;
        }

    }, [currentPatient])


    function PatientCard() {
        const Info = styled(Button)(({ theme }) => ({
            color: '#000000',
            backgroundColor: "#BAD39F",
            borderColor: "2px solid #000000",
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
            </div>
        )
    }

    function Detailed(){
        return(
            <div style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <Box
                    sx={{
                        width: "87vw",
                        height: "35vh",
                        backgroundColor: 'rgba(186, 211, 159, 1)',
                        marginTop: "2vh"
                    }}
                >
                    <div style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <AccountCircleIcon style={{fontSize: "30vh", marginTop: "2.5vh", marginLeft: "10vw", marginRight: "10vw"}} />
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>
                                <Typography sx={{
                                    fontFamily: "Nunito",
                                    fontSize: "4vh"
                                }}>
                                    Name:
                                </Typography>
                                <EditableTextfield multiline style={{backgroundColor: "transparent", marginTop: "1.7vh", fontSize: "4vh", width: "44.1vw"}} inputProps={{
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
                                <EditableTextfield multiline style={{backgroundColor: "transparent", marginTop: "1.7vh", fontSize: "4vh", width: "45.8vw"}} inputProps={{
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
                                <EditableTextfield multiline style={{backgroundColor: "transparent", marginTop: "1.7vh", fontSize: "4vh", width: "35vw"}} inputProps={{
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
                    <NormalButton style={{width: "40vw", height: "10vh", fontSize: "4vh", fontFamily: "Nunito"}}>Activity View</NormalButton>
                    <NormalButton style={{width: "40vw", height: "10vh", fontSize: "4vh", fontFamily: "Nunito"}}>Text Settings</NormalButton>
                </div>
            </div>

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
                    height: '70vh',
                    flexDirection: 'row',
                    width: '90.6vw',
                    overflow: 'auto',
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
