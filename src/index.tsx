import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './component/homepage';
import Header from './header/header';
import './style.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import About from './component/about';
import Error from './error';

export default function Index(){
    return (
        <>
            <Header/>
            <HomePage/>
        </>
    )
}

const browserRouter =  createBrowserRouter([
    {
        path:'/',
        element:<Index/>,
        errorElement:<Error/>
    },
    {
        path:'/about',
        element:<About/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={browserRouter}/>);