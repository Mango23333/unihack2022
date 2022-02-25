import {Button, styled} from "@mui/material";

export default function NormalButton(props){
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("rgba(106, 135, 75, 1)"),
        backgroundColor: "rgba(106, 135, 75, 1)",
        borderWidth: 0,
        '&:hover': {
            backgroundColor: "rgba(106,135,75,0.7)",
        },
    }));

    return (
        <ColorButton variant={"outlined"} onClick={props.onClick} style={props.style}>{props.children}</ColorButton>
    )
}
