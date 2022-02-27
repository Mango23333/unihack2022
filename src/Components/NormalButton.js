import {Button, styled} from "@mui/material";

export default function NormalButton(props){
    const ColorButton = styled(Button)(({ theme }) => ({
        color: 'white',
        backgroundColor: "rgba(106,135,75,1)",
        borderWidth: 0,
        border: '2px solid #6A874B',
        '&:hover': {
            backgroundColor: "rgba(106,135,75,0.7)",
            border: '2px solid #4A6928'
        },
    }));

    return (
        <ColorButton variant={"outlined"} onClick={props.onClick} style={props.style}>{props.children}</ColorButton>
    )
}
