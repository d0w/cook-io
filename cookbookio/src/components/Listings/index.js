import './index.scss'
import { createContext, useEffect } from 'react';
import LeftBar from '../LeftBar';
import { useState } from 'react';
import Recipe from '../Recipe';
import axios from 'axios'

const Listings = () => {

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('beef,rice');

    useEffect(() => {
        getRecipes();
    },[query]);

    const getRecipes = async() => {
        console.log('API CALL')
        const data = {
            "recipes": [
            {
                id: 0,
                title: "yes sir",
                image: "someurl"
            },
            {
                id:1,
                title: "second thing",
                image: "someotherurl"
            }]
        } 
        setRecipes(data.recipes);
        console.log(data);

        // UNCOMMENT FOR ACTUAL API
        // const options = {
        //     method: 'GET',
        //     url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
        //     params: {
        //       ingredients: query,
        //       number: '5',
        //       ignorePantry: 'true',
        //       ranking: '1'
        //     },
        //     headers: {
        //       'X-RapidAPI-Key': 'd72340653cmsh492c7c86742913dp17b7d4jsn265838768460',
        //       'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        //     }
        //   };
        // axios.request(options).then(function (response) {
        //     const data = response.data;
        //     console.log(data);
        //     setRecipes(data);
        // }).catch(function (error) {
        //     console.error(error);
    
        // });
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
                    title={recipe.title}
                    image={recipe.image}/>
    
            ))}
        </div>
    );
}

export default Listings;