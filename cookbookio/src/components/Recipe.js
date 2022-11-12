import React from 'react';


const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <p>{image}</p>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient}</li>
                ))}
            </ol>
            <img src="" alt=""/>

        </div>
    );
}

export default Recipe;