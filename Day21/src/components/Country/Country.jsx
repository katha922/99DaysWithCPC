import './Country.css'
import { useState } from "react";

const Country = ({country}) => {
    const {name,flags,area,population,cca3} = country;
    const[visited,setVisited]=useState(false)
    const handleVisited=()=>{
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <img src={flags?.png} alt="" />
            <h3>Name: {name?.common}</h3>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited} className='btn-1'>{visited?'Visited':'Going'}</button>
            {/* {visited ? 'i have visited' : 'i want to visit'} */}
            
        </div>
    );
};

export default Country;