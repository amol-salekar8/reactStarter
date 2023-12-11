import React,{useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {IMAGE_URL_CLOUD,RESTRO_JSON} from '../constant';

const resta = JSON.parse(RESTRO_JSON);
const Restaurant = (props) =>{
    const {cloudinaryImageId,name,cuisines,avgRating} = props.resto;
    return(
        <>
                <div className='card' key={props.key}>
                    <img alt='restroImg' src={IMAGE_URL_CLOUD+cloudinaryImageId}/>
                    <h4>{name}</h4>
                    <p>{cuisines.join(', ')}</p>
                    <p>{avgRating}</p>
                </div>                
        </>
    )
}

async function getRestourantList () {
    const respons = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true',).then( respons => respons.json()).catch(e => console.log(e));    
    console.log(respons);

}

const HomePage = () => {
         getRestourantList();
    return(
        <>
            <div className='carding'>
                {resta !== null && resta.restaurants.length > 0 &&
                    resta.restaurants?.map( (restaurant,i) =>
                        (
                            <Restaurant resto ={{...restaurant.info}} key={i}/>
                        )    
                    )
                }
            </div>
        </>    
    );
}

export default HomePage;