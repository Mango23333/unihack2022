import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import NormalButton from './NormalButton';
import { typography } from '@mui/system';
import {styled} from "@mui/material";

export default function AddPatient(props){
    const nameTextRef = React.useRef('');
    const userNameTextRef = React.useRef('');
    const ageTextRef = React.useRef('');
    const [nameerror, setNameerror] = React.useState(false);
    const [usernameerror, setUsernameerror] = React.useState(false);
    const [ageerror, setAgeerror] = React.useState(false);


    const InputField = styled(TextField)({
        '& label.Mui-focused': {
        color: '#6A874B',
        },
        '& .MuiInput-underline:after': {
        borderBottomColor: '#6A874B',
        },
        '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#8AA861',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6A874B',
        },
        },
        '& .MuiInputBase-input': {
            fontFamily: ['Comic Sans', '"Nunito"','"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',].join(','),
        }
    });
  
    return(
        <Modal
            open={props.openpop}
            onClose={props.handleClosepop}
            aria-labelledby="modal-addpatient"
            aria-describedby="modal-addpatient-content"
            sx = {{
                width: '88%',
                height: 480,
                position: 'absolute',
                ml: '6%',
                mt: '9%'
            }}
        >
            <Box sx={{bgcolor: '#BAD39F', height: '100%', borderRadius: '12px'}} >
                
                <Box>
                    <Box sx={{border : '1px solid #BAD39F', borderRadius: '12px'}}>
                    <Typography sx={{
                        fontFamily: 'Nunito',
                        fontSize: 35,
                        textAlign: "left",
                        marginTop: '5vh',
                        marginLeft: '3vw'
                        }}>

                        Register a patient
                    </Typography>
                    </Box>
                    <Box >
                    <InputField
                        required
                        error={nameerror} 
                        id="Name-field" 
                        label="Name" 
                        variant="outlined"
                        inputRef={nameTextRef}
                        helperText="Enter the patient's name"
                        sx={{
                            bgcolor: '#FDFAE2',
                            borderRadius: '4px',
                            width: 1/2,
                            position: 'relative',
                            ml: '3vw',
                            mt: '1vw',
                            colour: '8AA861',
                    }}/>
                    </Box>
                    <Box>
                    <InputField
                        required
                        error={usernameerror}  
                        id="Username-field" 
                        label="Username" 
                        variant="outlined"
                        inputRef={userNameTextRef}
                        helperText="Enter any username for the patient"
                        sx={{
                            bgcolor: '#FDFAE2',
                            borderRadius: '4px',
                            width: 1/2,
                            position: 'relative',
                            ml: '3vw',
                            mt: '2vw'
                    }}/>
                    </Box>
                    <Box>
                    <InputField
                        required
                        error={ageerror}  
                        id="Age-field" 
                        label="Age" 
                        variant="outlined"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputRef={ageTextRef}
                        helperText="Enter the patient's age, only number is accepted"
                        sx={{
                            bgcolor: '#FDFAE2',
                            borderRadius: '4px',
                            width: 1/4,
                            position: 'relative',
                            ml: '3vw',
                            mt: '2vw'
                    }}/>
                    </Box>
                </Box>
                <Box sx={{position: 'relative', mt: '2vw', ml: '45%'}}>
                    <NormalButton onClick={()=> {
                        setNameerror(false);
                        setUsernameerror(false);
                        setAgeerror(false);
                        if (nameTextRef.current.value.trim() == '')
                        {
                            setNameerror(true);
                        }
                        else if (userNameTextRef.current.value.trim() == '')
                        {
                            setUsernameerror(true);
                        }
                        else if (ageTextRef.current.value == '' || ageTextRef.current.value >= 120 || ageTextRef.current.value <= 0 || isNaN(ageTextRef.current.value))
                        {
                            setAgeerror(true);
                        }
                        else
                        {
                            props.handleClosepop();
                        }
                    }}>
                        Add patient
                    </NormalButton>
                </Box>
            </Box>
        </Modal>
    )
}