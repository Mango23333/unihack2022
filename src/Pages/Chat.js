import * as React from 'react';
import {useContext} from "react";
import { styled } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { flexbox } from '@mui/system';
import { Modal, tabsListUnstyledClasses, Typography } from '@mui/material';
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import NormalButton from "../Components/NormalButton";

export default function Main(){
    const [currentPage, setCurrentPage] = useContext(CurrentPageContext);

    return(
        <div>
            <div >
                <Typography
                    sx = {{
                    fontFamily:'Nunito',
                    fontSize:'260%',
                    color: '#000000',
                    textAlign: "left",  
                    marginLeft: '2vw',
                    border: '1px solid #000000', // can get rid of this. I was using it for alignment
                }}>
 
                Chat Page
                </Typography>


            </div> 
            <div>
            <Box sx={{
                border: '2px solid #6A874B',
                borderRadius: '4px',
                marginTop: '0.5%',
                height: '76vh',
                flexDirection: 'row',
                width: '90.6vw',
                overflow: 'auto',
                marginLeft: '2vw', // adjust
                backgroundColor: '#FFFCD6',
            }}>
                <h1>insert stuff</h1>
                </Box>
            </div>

        </div>

    )
}




