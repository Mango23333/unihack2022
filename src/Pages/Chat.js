import * as React from 'react';
import {useContext} from "react";
import { styled } from '@mui/material';
import { Button } from '@mui/material';
import { flexbox } from '@mui/system';
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import Header from '../Components/Header';
import ChatBox from '../Components/ChatBoxComponents/ChatBox';

export default function Main(){
    const [currentPage, setCurrentPage] = useContext(CurrentPageContext);

    return(
        <div>  
            {/* The chatbox and header have a width of 90vw */}         
            <Header title={"Chat Box"}/>
            <ChatBox />
        </div>

    )
}




