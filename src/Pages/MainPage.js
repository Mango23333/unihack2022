import {useContext} from "react";

import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import NormalButton from "../Components/NormalButton";

export default function Main(){
    const [currentPage, setCurrentPage] = useContext(CurrentPageContext);

    return(
        <div style={{
            textAlign: "center"
        }}>
            <h1>Main Page</h1>
            <NormalButton onClick={() => {
                setCurrentPage("login")
            }}>Login page</NormalButton>
        </div>
    )
}
