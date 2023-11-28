import React from 'react';
import ReactDOM from 'react-dom/client';
import  Logo from "../img/foodLogo.png";

export const Title = () => (
    <div style={{display: 'flex'}}> 
        <img style={{width: '50px' }} src={Logo} alt='logo'/>
        <h2>Food Plaza</h2>
    </div>
);

const Header = () => {
    return(
        <>
            <div className='nav'>
                <Title/>
                <ul className='nav-buttons'>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>                
                </ul>
            </div>    
        </>
    );
}

export default Header;