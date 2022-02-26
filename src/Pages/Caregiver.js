import * as React from 'react';
import {useContext, useEffect, useState} from "react";
import { styled } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { flexbox } from '@mui/system';
import { Modal, tabsListUnstyledClasses, Typography } from '@mui/material';
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import Patients from "../Components/PatientProfile";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Main(){
    const [currentPage, setCurrentPage] = useContext(CurrentPageContext);
    const [patientData, setPatientData] = useState([]);
    const [detailedView, setDetailedView] = useState(false);

    useEffect(() => {
        setPatientData([{name: "Bob", stage: 4, age: 52}, {name: "Bob2", stage: 4, age: 52}, {name: "Bob2", stage: 4, age: 52}, {name: "Bob2", stage: 4, age: 52}, {name: "Bob2", stage: 4, age: 52}, {name: "Bob2", stage: 4, age: 52}, {name: "Bob2", stage: 4, age: 52}, {name: "Bob2", stage: 4, age: 52}, {name: "Bob", stage: 4, age: 52}])
    }, [])


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
                    <Info>
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

                    <PatientCard onClick={() => {
                        setCurrentPage("login")
                    }}/>

                </Box>
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
                    {detailedView === false && Overview()}
                </Box>
            </div>
        </div>

    )
}
