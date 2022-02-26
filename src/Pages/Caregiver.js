import * as React from 'react';
import {useContext} from "react";
import { styled } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { flexbox } from '@mui/system';
import { Modal, tabsListUnstyledClasses, Typography } from '@mui/material';
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import Patients from "../Components/PatientProfile";

export default function Main(){
    const [currentPage, setCurrentPage] = useContext(CurrentPageContext);

    /* HELPER TO FIGURE OUT FORMATS
    const Flashcard_button = styled(Button)(({ theme }) => ({
        fontFamily: [
            'Oxygen',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        color: '#000000',
        backgroundColor: '#fffefc',
        fontSize: '0.8vw',
        height: 118,
        width: '97%',
        border: '2px solid #6ca1f0',
        borderRadius: '16px',
        marginTop: '0.25vw',
        position: 'relative',
        marginLeft: '5%',
        textTransform: 'capitalize'
    }));*/

    const Patient = styled(Button)(({ theme }) => ({
        color: '#000000',
        backgroundColor: "#BAD39F",
        borderColor: "2px solid #000000",
        fontSize: '2vh',
        height: 118, // TO CHANGE
        width: 100,
        minwidth: '20%', // TO CHANGE
        borderRadius: '12px',
        position: 'relative',
        '&:hover': {
            backgroundColor: "#A6BE8D",
            borderColor: "#000000",
        }

    }));

    return(
        <div>
            <h1>Doctor page</h1>

            <Box sx={{
                border: '2px solid #6A874B',
                borderRadius: '4px',
                marginTop: '0.5%',
                height: '56vh',
                flexDirection: 'row',
                width: '90.7vw',
                overflow: 'auto',
                marginLeft: '4.65vw',
                backgroundColor: '#FFFCD6',
            }}>

                <Box sx = {{
                    border: '2px solid #6A874B',
                    margin: '5vh',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignContent: 'flex-start',
                }}>
                    <Patient onClick={() => {
                        setCurrentPage("login")
                    }}>PATIENT 1 change path </Patient>
                    <Patient onClick={() => {
                        setCurrentPage("login")
                    }}>PATIENT 2 change path </Patient>
                    <Patient onClick={() => {
                        setCurrentPage("login")
                    }}>PATIENT 3 change path </Patient>
 
                </Box>


            </Box>
           
        </div>

    )
}
/* <NormalButton onClick={() => {
                setCurrentPage("login")
            }}>Login page</NormalButton> */