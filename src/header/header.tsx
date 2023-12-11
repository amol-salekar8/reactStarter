import React from 'react';
import  Logo from "../img/foodLogo.png";
import {Link} from 'react-router-dom';

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
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/about'>about</Link>
                    </li>
                    <li>
                        <Link to='/contact'>contact</Link>
                    </li>                
                </ul>
            </div>    
        </>
    );
}

export default Header;