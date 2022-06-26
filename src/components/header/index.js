import { useState } from "react";
import useGithub from "../../hooks/github-hooks";
import "./index.css"

export default function Header(){
    const{ getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState()

    const submitGetUser = () =>{
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    }
    return(
        <header>
            <div className="content">
                <input type="text" 
                placeholder="Buscar por nome de usuario:" 
                onChange={(event) => setUsernameForSearch(event.target.value)}/>
                <button type="submit" onClick={submitGetUser}>Buscar</button>
            </div>
        </header>
    );
};