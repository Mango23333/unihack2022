import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import NormalButton from './NormalButton';
import { typography } from '@mui/system';

export default function AddPatient(props){
    const nameTextRef = React.useRef('');
    const userNameTextRef = React.useRef('');
    const ageTextRef = React.useRef('');
    const [nameerror, setNameerror] = React.useState(false);
    const [usernameerror, setUsernameerror] = React.useState(false);
    const [ageerror, setAgeerror] = React.useState(false);

    return(
        <Modal
            open={props.openpop}
            onClose={props.handleClosepop}
            aria-labelledby="modal-addpatient"
            aria-describedby="modal-addpatient-content"
            sx = {{
                width: '90%',
                height: 650,
                position: 'absolute',
                ml: '5%',
                mt: '7%'
            }}
        >
            <Box sx={{bgcolor: '#BAD39F', height: '100%', borderRadius: '4px'}} >
                <Box>
                    <Box>
                    <TextField
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
                            mt: '1vw'
                    }}/>
                    </Box>
                    <Box>
                    <TextField
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
                            mt: '3vw'
                    }}/>
                    </Box>
                    <Box>
                    <TextField
                        required
                        error={ageerror}  
                        id="Age-field" 
                        label="Age" 
                        variant="outlined"
                        inputRef={ageTextRef}
                        helperText="Enter the patient's age, only number is accepted"
                        sx={{
                            bgcolor: '#FDFAE2',
                            borderRadius: '4px',
                            width: 1/4,
                            position: 'relative',
                            ml: '3vw',
                            mt: '3vw'
                    }}/>
                    </Box>
                </Box>
                <Box sx={{position: 'relative', mt: '11vw', ml: '45%'}}>
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