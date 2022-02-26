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

export default function Detailed(){
    const [currentPage, setCurrentPage] = useContext(CurrentPageContext);

    return(
        <div>
            <div >

            </div>
        </div>

    )
}

