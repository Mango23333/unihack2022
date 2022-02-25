import {useContext} from "react";

import {CurrentPageContext} from "../Contexts/CurrentPageContext";

export default function Main(){
    const [currentPage, setCurrentPage] = useContext(CurrentPageContext);

    return(
        <div>
            <h1>Main Page</h1>
            <button onClick={() => {
                setCurrentPage("login")
            }}>Login page</button>
        </div>

    )
}
