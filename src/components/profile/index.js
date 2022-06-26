import "./index.css"
import useGithub from "../../hooks/github-hooks"
import { useEffect } from "react";
export default function Profile(){
    const { githubState } = useGithub();
    useEffect(()=>{
        console.log(githubState.user)
    }, [githubState])
    return(
        <div className="contentProfile">
            <div className="contentIMG">
                <img src={githubState.user.avatar} alt="Avatar Github"></img>
            </div>
            <div className="contentUser">
                <div className="contentUserName">
                    <h1>{githubState.user.name}</h1>
                    <div className="contentuserGeneric">
                        <h2>Username: </h2>
                        <h2><a href={githubState.user.html_url} target="blank">{githubState.user.login}</a></h2>
                    </div>
                </div>
                <div className="contentUserName">
                    <div className="contentuserGeneric">
                        <h2>company:</h2>
                        <h2>{githubState.user.company}</h2>
                    </div>
                </div>
                <div className="contentUserName">
                    <div className="contentuserGeneric">
                        <h2>location:</h2>
                        <h2>{githubState.user.location}</h2>
                    </div>
                </div>
                <div className="contentUserName">
                    <div className="contentuserGeneric">
                        <h2>blog:</h2>
                        <h2><a href={githubState.user.blog} target="blank">Blog</a></h2>
                    </div>
                </div>
                <div className="contentUserName">
                    <div className="contentuserGeneric">
                        <h2>id:</h2>
                        <h2>{githubState.user.id}</h2>
                    </div>
                </div>
                <div className="contentUserAcount">
                    <div>
                        <h3>Followers</h3>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h3>Following</h3>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h3>Gists</h3>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h3>Respos</h3>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}