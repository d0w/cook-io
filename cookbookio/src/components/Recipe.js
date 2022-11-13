import React from 'react';
import { useState } from 'react';

const Recipe = ({title,image,url,cuisines,time,instructions}) => {

    const [showResults, setShowResults] = useState(false);
    const onClick = () => {
        if (showResults) setShowResults(false);
        else {
            setShowResults(true);   
        }
    }

    return (
        <div>
            <h1>{title}</h1>
            <img src={ image } alt=""/>
            <h3>{ url }</h3>
            <h3>Cuisine: 
                { cuisines.map(element => {
                    return(<span className='single-cuisine'> {element} </span>)
                })}
            </h3>
            <h3>Cook Time: {time} minutes</h3>
            <button onClick={onClick}>Show/Hide</button>
            {showResults? 
                <p className='instructions'>{ instructions }</p>
            : null }
            
            

        </div>
    );
}

export default Recipe;