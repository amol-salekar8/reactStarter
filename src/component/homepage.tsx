import React,{useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {IMAGE_URL_CLOUD,RESTRO_JSON} from '../constant';

const resta = JSON.parse(RESTRO_JSON);
const Restaurant = ({name,avgRating,cloudinaryImageId,cuisines}) =>{
    return(
        <>
                <div className='card'>
                    <img alt='restroImg' src={IMAGE_URL_CLOUD+cloudinaryImageId}/>
                    <h4>{name}</h4>
                    <p>{cuisines.join(', ')}</p>
                    <p>{avgRating}</p>
                </div>                
        </>
    )
}

async function getRestourantList () {
    const respons = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const resJson = await respons.json();
    console.log(resJson);

}

const HomePage = () => {
        // getRestourantList();
    return(
        <>
            <div className='carding'>
                {resta !== null && resta.restaurants.length > 0 &&
                    resta.restaurants?.map( (restaurant) =>
                        (
                            <Restaurant {...restaurant.info}/>
                        )    
                    )
                }
            </div>
        </>    
    );
}

export default HomePage;