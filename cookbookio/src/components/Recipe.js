import React from 'react';
import { useState } from 'react';
import './Recipe.scss'

const Recipe = ({title,image,url,dishtypes,time,instructions,ingredients}) => {

    const [showResults, setShowResults] = useState(false);
    const [showHide, setShowHide] = useState('Show');
    
    const onClick = () => {
        if (showResults) {
            setShowResults(false);
            setShowHide('Show');
        }
        else {
            setShowResults(true);  
            setShowHide('Hide'); 
        }
    }

    return (
        <div className="recipe">
            <h1>{title}</h1>
            <a href={url} target="_blank">
                <img src={ image } alt=""/>
            </a>
            <h3>Dish Type: 
                { dishtypes.map(element => {
                    return(<span className='single-cuisine'> {element} </span>)
                })}
            </h3>
            <h3>Ingredients: 
                { ingredients.map(element => {
                    return(<span className='single-cuisine'> {element.name} </span>)
                })}
            </h3>
            <h3>Cook Time: {time} minutes</h3>
            <h4>Instructions</h4>
            <button onClick={onClick}>{showHide}</button>
            {showResults? 
                <p className='instructions'>{ instructions }</p>
            : null }
            
            

        </div>
    );
}

export default Recipe;