import {useContext} from "react";
import { Box } from "@mui/system";
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import NormalButton from "../Components/NormalButton";

export default function Main(){
    const [currentPage, setCurrentPage] = useContext(CurrentPageContext);

    return(
        <div>
            <Box sx={{textAlign: 'left', mt: '20vh'}}>
                <h1 className={"h1"}>Alleviate</h1>
            </Box>
            <Box sx={{textAlign: 'left', ml: '3vw'}}>
                <h2>Care for your loved one with our virtual assistant</h2>
            </Box>
            
            <Box sx={{
                mt: '5vw',
                textAlign: 'left',
                ml: '5vw'
            }}>
                <NormalButton onClick={() => {
                    setCurrentPage("login")
                }}>Doctor Login</NormalButton>
                <NormalButton onClick={() => {
                    setCurrentPage("login_patient")
                }}>Patient Login</NormalButton>
                <NormalButton onClick={() => {
                    setCurrentPage("caregiver")
                }}>Doctor</NormalButton>
                <NormalButton onClick={() => {
                    setCurrentPage("chat")
                }}>Chat</NormalButton>
            </Box>
        </div>
    )
}
