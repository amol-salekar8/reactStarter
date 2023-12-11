import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './component/homepage';
import Header from './header/header';
import './style.css';
import About from './component/about';
import Error from './error';
import Footer from './footer/footer';
import Contact from './component/contact';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

export default function Index(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const reactRouter = createBrowserRouter(
    [
        {
            path:'/',
            element:<Index/>,
            errorElement:<Error/>,
            children:[
                {
                    path:'/',
                    element:<HomePage/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/contact',
                    element:<Contact/>
                }
            ]
        }
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={reactRouter} />);