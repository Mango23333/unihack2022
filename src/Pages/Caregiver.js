import * as React from 'react';
import {useContext} from "react";
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

    
    function Patient(props) {
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


        return (
        <Box
        sx={{
          p: 1,
          m: 1,
          borderRadius: 2,
          fontFamily: 'Nunito',
        }}>
        <Info 
            icon={<AccountCircleIcon style={{color: '#ede7e3'}}/>}> 
            <Typography>
                {props.name} - {props.age} <br/>
                Stage {props.stage}
            </Typography>
        </Info>

        </Box>
        );
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
                    justifyContent: 'space-evenly',
                    alignContent: 'flex-start',
                    p: 1,
                    overflow: 'auto',
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    }}>

                    <Patient onClick={() => {
                        setCurrentPage("login")
                    }} name = "Bob" age ='87' stage = '3'/> 
                    
                </Box>
            </Box>
            </div>

        </div>

    )
}
/* <NormalButton onClick={() => {
                setCurrentPage("login")
            }}>Login page</NormalButton> 
            
            
<Box sx = {{
                    border: '2px solid #6A874B',
                    margin: '5vh',
                    marginTop: '-2vh',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    alignContent: 'flex-start',
                    overflow: 'auto',
                    height: '65vh',
                }}>
                */