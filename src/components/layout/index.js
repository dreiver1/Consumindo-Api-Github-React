import React from "react";
import "./index.css"
import Header from "../header"

function Layout({children}){

    return(

        <section className="sectionLayout">
            <Header/>
            {children}
        </section>
    )
}

export default Layout;