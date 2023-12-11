import React from 'react';
import {useRouteError} from 'react-router-dom'

const Error = () => {
    const eror : any = useRouteError();
    console.log(eror);
    return(
        <>
            <h2>Opps !!!</h2>
            <h3>Something went wrong</h3>
            <h3>{eror.status + " : "+ eror.statusText}</h3>
        </>
    );
}

export default Error;