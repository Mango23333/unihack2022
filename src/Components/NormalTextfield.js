import {styled, TextField} from "@mui/material";
import {forwardRef} from "react";

const CssTextField = styled(TextField)({
    backgroundColor: "rgba(253, 250, 226, 1)",
    '& label.Mui-focused': {
        color: 'rgba(106, 135, 75, 1)',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(106, 135, 75, 1)',
            borderWidth: 2
        },
        '&:hover fieldset': {
            borderColor: 'rgba(106, 135, 75, 1)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(106, 135, 75, 1)',
        }
    },
});

export const NormalTextfield = forwardRef((props, ref) => {
    return(
        <CssTextField label={props.label} style={props.style} inputRef={ref}/>
    )
})
