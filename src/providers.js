import React from "react";
import GithubProvider from "./providers/GithubProvider";
import App from "./App";
export default function Providers(){
    return(
        <main>
            <GithubProvider>
                <App/>
            </GithubProvider>
        </main>
    );
};