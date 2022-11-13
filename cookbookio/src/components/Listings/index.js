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
    const [ingredients, setIngredients] = useState([]);
    const [ID, setID] = useState([]);

    useEffect(() => {
        getRecipes();
        getRecipeByID();
    },[query]);

    const getRecipes = async() => {
        console.log('API CALL')
        const data = {
            "recipes": [
            {
                id: 50,
                title: "Woo",
                image: "favicon.ico",
                url: "someurl",
                cuisines: ["yes", "no"],
                readyInMinutes: 50,
                instructions: "these are some instructions",
            },
            {
                id:332,
                title: "second thing",
                image: "someotherurl",
                url: "someurl2",
                cuisines: ["yes", "no"],
                readyInMinutes: 50,
                instructions: "these are some instructions",
            }]
        } 
        let ids = [];
        ids.push(...data.recipes.map(rec => rec.id));
        setID(ids);
        console.log(ids);

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

    const getRecipeByID = () => {
        console.log('ID CALL')
        const data = {
            "recipes": [
            {
                id: 50,
                title: "Wooawefaf",
                image: "favicon.ico",
                url: "someurl",
                cuisines: ["yes", "no"],
                readyInMinutes: 50,
                instructions: "these are some instructions",
            },
            {
                id:332,
                title: "second thingwefewf",
                image: "someotherurl",
                url: "someurl2",
                cuisines: ["yes", "no"],
                readyInMinutes: 50,
                instructions: "these are some instructions",
            }]
        } 

        setRecipes(data.recipes);
    }

    const updateSearch = (event) => {
        setSearch(event.target.value);
        console.log(search);
    };

    const getSearch = (event) => {
        event.preventDefault();
        setQuery(search);

        // get ingredient list
        let ing = search.split(",");
        const results = ing.map(element => {
            return element.trim();
        });
        setIngredients(results);
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
            <div className='ingredient-listing'>
                
                    { ingredients.map(element => {
                        return(<span className='single-ingredient'> {element} </span>)
                    }) }
            </div>
            <div className='recipe-listing'>
                { recipes.map(recipe=>(
                    <Recipe 
                        key={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                        url={recipe.url}
                        cuisines={recipe.cuisines}
                        time={recipe.readyInMinutes}
                        instructions={recipe.instructions}
                        />
        
                ))}
            </div>
            
        </div>
    );
}

export default Listings;