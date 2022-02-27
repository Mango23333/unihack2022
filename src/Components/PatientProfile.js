import {Button, styled} from "@mui/material";

export default function Patients(props){
    const ColorButton = styled(Button)(({ theme }) => ({
        color: '#000000',
        backgroundColor: "#BAD39F",
        borderWidth: 2,
        borderColor: "#000000",
        '&:hover': {
            backgroundColor: "#A6BE8D",
            borderColor: "#000000",
        }

    }));

    return (
        <ColorButton variant={"outlined"} onClick={props.onClick} style={props.style}>{props.children}</ColorButton>
    )
}
