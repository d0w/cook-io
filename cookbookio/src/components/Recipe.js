import React from 'react';


const Recipe = ({title,image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{image}</h2>
            {/* <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient}</li>
                ))}
            </ol> */}
            <img src={ image } alt=""/>

        </div>
    );
}

export default Recipe;