import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import NormalButton from './NormalButton';
import { typography } from '@mui/system';
import {styled} from "@mui/material";

export default function AddActivity(props){
    const nameTextRef = React.useRef('');
    const descriptionTextRef = React.useRef('');
    const freqTextRef = React.useRef('');
    const taskTextRef = React.useRef('');
    const [nameerror, setNameerror] = React.useState(false);
    const [descriptionerror, setDescriptionerror] = React.useState(false);
    const [freqerror, setFreqerror] = React.useState(false);
    const [taskerror, setTaskerror] = React.useState(false);


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
        '&:hover fieldset': {
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
                height: 535,
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

                        Add an activity or reminder
                    </Typography>
                    </Box>
                    <div style= {{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        width: "100%",
                        height: '52vh',
                        //border: '1px solid #000000'
                    }}>
                    
                        <div style= {{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: "50%",
                            height: '52vh',
                            //border: '1px solid #000000'
                        }}>
                        <Box >
                        <InputField
                            error={nameerror} 
                            id="Name-field" 
                            label="Name" 
                            variant="outlined"
                            inputRef={nameTextRef}
                            helperText="Enter the name of activity"
                            sx={{
                                bgcolor: '#FDFAE2',
                                borderRadius: '4px',
                                width: '200%',
                                position: 'relative',
                                ml: '3vw',
                                mt: '1vw',
                                colour: '8AA861',
                        }}/>
                        </Box>
                        <Box>
                        <InputField
                            error={descriptionerror}  
                            id="Description-field" 
                            label="Description" 
                            multiline
                            rows={3}
                            variant="outlined"
                            inputRef={descriptionTextRef}
                            helperText="Enter a description of the task"
                            sx={{
                                bgcolor: '#FDFAE2',
                                borderRadius: '4px',
                                width: '200%',
                                position: 'relative',
                                ml: '3vw',
                                mt: '2vw'
                        }}/>
                        </Box>
                        
                        <Box>
                        <InputField
                            error={freqerror}  
                            id="Freq-field" 
                            label="Frequency" 
                            variant="outlined"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputRef={freqTextRef}
                            helperText="Enter desired frequency of daily activity (days)"
                            sx={{
                                bgcolor: '#FDFAE2',
                                borderRadius: '4px',
                                width: '100%',
                                position: 'relative',
                                ml: '3vw',
                                mt: '2vw'
                        }}/>
                        </Box>
                        </div>
                        <div style= {{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: "50%",
                            height: '52vh',
                            //border: '1px solid #000000'
                        }}>
                            <Box>
                                <InputField
                                    error={taskerror}  
                                    id="Task-field" 
                                    label="Task" 
                                    multiline
                                    rows={12.4}
                                    variant="outlined"
                                    inputRef={taskTextRef}
                                    helperText="Enter task message that will be sent"
                                    sx={{
                                        bgcolor: '#FDFAE2',
                                        borderRadius: '4px',
                                        width: '200%',
                                        position: 'relative',
                                        ml: '3vw',
                                        mt: '1vw'
                                }}/>
                            </Box>
                        </div>
                    </div>
                </Box>
                <Box sx={{position: 'relative', ml: '45%'}}>
                    <NormalButton onClick={()=> {
                        setNameerror(false);
                        setDescriptionerror(false);
                        setFreqerror(false);
                        setTaskerror(false);
                        if (nameTextRef.current.value.trim() == '')
                        {
                            setNameerror(true);
                        }
                        else if (descriptionTextRef.current.value.trim() == '')
                        {
                            setDescriptionerror(true);
                        }
                        else if (freqTextRef.current.value == '' || freqTextRef.current.value >= 10000 || freqTextRef.current.value <= 0 || isNaN(freqTextRef.current.value))
                        {
                            setFreqerror(true);
                        }
                        else if (taskTextRef.current.value.trim() == '')
                        {
                            setTaskerror(true);
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