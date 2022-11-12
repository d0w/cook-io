import './index.scss'
import { createContext, useEffect } from 'react';
import LeftBar from '../LeftBar';
import { useState } from 'react';
import Recipe from '../Recipe';

const Listings = () => {

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipes();
    },[query]);

    const getRecipes = async() => {
        //API CALL IN HERE
        console.log('API CALL')
        const data = {
            "recipes": [
            {
                id: 0,
                name: "yes sir",
                ingredients: ["ing1", "ing2","ing3"]
            },
            {
                id:1,
                name: "second thing",
                ingredients: ["ing1", "ing2","ing3"]
            }]
        }
        setRecipes(data.recipes);
        console.log(data);
    }

    const updateSearch = (event) => {
        setSearch(event.target.value);
        console.log(search);
    };

    const getSearch = (event) => {
        event.preventDefault();
        setQuery(search);
    }

    return (
        <div className="listing-container">
            <form onSubmit={getSearch} className="form-container">
                <input className='search-form'
                    value={search}
                    onChange={updateSearch}/>
                <button type="submit">Search</button>
                <label>Search Type</label>
                <select name="Type" className="type-select">
                    <option value="regular">Recipe</option>
                    <option value="ingredient">Ingredient</option>
                </select>
            </form>
            {recipes.map(recipe=>(
                <Recipe 
                    key={recipe.id}
                    title={recipe.name}
                    calories={recipe.id}
                    image={"image"}
                    ingredients={recipe.ingredients}/>
    
            ))}
        </div>
    );
}

export default Listings;