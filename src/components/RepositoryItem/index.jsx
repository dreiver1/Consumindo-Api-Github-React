import React from 'react';
import "./index.css"
export default function RepositoryItem({name, linkRep, fullname}){

    return(
        <div className='contentReps'>
            <h2>Nome:</h2>  
            <h1><a href={linkRep} target="_blank" rel="noreferrer">{name}</a></h1>
        </div>
    );
};