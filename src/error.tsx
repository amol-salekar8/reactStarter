import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = ()=>{
    const error:any = useRouteError();
    console.log(error);
    return(
        <>
            <h1>Opps !!!</h1>
            <h3>Something went wrong !!</h3>
            <h1>{error.status + " : " + error.statusText}</h1>
        </>
    )
}

export default Error;