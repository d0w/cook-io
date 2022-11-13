import './index.scss'
import { createContext, useEffect } from 'react';
import LeftBar from '../LeftBar';
import { useState } from 'react';
import Recipe from '../Recipe';
import axios from 'axios'

const Listings = () => {

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('beef,lettuce');
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        getRecipes();
    },[query]);

    const getRecipes = async() => {
        // console.log('Query: ' + query)
        // const data = {
        //     "recipes": [
        //     {
        //         id: 5125,
        //         title: "Woo",
        //         image: "CHEF.png",
        //         url: "someurl",
        //         cuisines: ["yes", "no"],
        //         readyInMinutes: 50,
        //         instructions: "these are some instructions",
        //     },
        //     {
        //         id:332,
        //         title: "second thing",
        //         image: "CHEF.png",
        //         url: "someurl2",
        //         cuisines: ["yes", "no"],
        //         readyInMinutes: 50,
        //         instructions: "these are some instructions",
        //     }]
        // } 
        // let ids = [];
        // const list= ids.push(...data.recipes.map(rec => rec.id));
        // console.log(ids);
        
        // const dataTwo = {
        //     "recipesTwo": [
        //     {
        //         id: 50,
        //         title: "Wooawefaf",
        //         image: "favicon.ico",
        //         url: "someurl",
        //         cuisines: ["yes", "no"],
        //         readyInMinutes: 50,
        //         instructions: "these are some instructions",
        //     },
        //     {
        //         id:5125,
        //         title: "second thingwefewf",
        //         image: "favicon.ico",
        //         url: "someurl2",
        //         cuisines: ["yes", "no"],
        //         readyInMinutes: 50,
        //         instructions: "these are some instructions",
        //     },
        //     {
        //         id:3323123,
        //         title: "second thingwefewf",
        //         image: "favicon.ico",
        //         url: "someurl2",
        //         cuisines: ["yes", "no"],
        //         readyInMinutes: 50,
        //         instructions: "these are some instructions",
        //     }]
        // } 
        // console.log('IDS: ' + ids.join(','));
        // setRecipes(dataTwo.recipesTwo);
        // console.log(dataTwo.recipesTwo)
        const options = {

            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
            params: {
              ingredients: query,
              number: '30',
              ignorePantry: 'true',
              ranking: '1'
            },
            headers: {
              'X-RapidAPI-Key': 'd72340653cmsh492c7c86742913dp17b7d4jsn265838768460',
              'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log('ID API CALL')
            const datas = response.data;
            console.log(datas);
            let idList = [];
            idList.push(datas.map(rec => rec.id));
            console.log(idList);


            const optionsTwo = {
                method: 'GET',
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk',
                params: {ids: idList.join('')},
                headers: {
                  'X-RapidAPI-Key': 'd72340653cmsh492c7c86742913dp17b7d4jsn265838768460',
                  'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                }
            };

            axios.request(optionsTwo).then(function (responseTwo) {
                console.log('Fetching Actual Recipes');
                const data = responseTwo.data;
                console.log(responseTwo.data);
                setRecipes(data);
            }).catch(function (error) {
                console.error(error);
            });
        }).catch(function (error) {
            console.error(error);
    
        });
    }

    
    const updateSearch = (event) => {
        setSearch(event.target.value);
        console.log(search);
    };

    const getSearch = (event) => {
        event.preventDefault();


        // get ingredient list
        let ing = search.split(",");
        const results = ing.map(element => {
            return element.trim();
        });
        setIngredients(results);
        setQuery(results.join(','));
        console.log(results);
    }


    return (
        <div className="listing-container">
            <form onSubmit={getSearch} className="form-container">
                <input className='search-form'
                    placeholder='Type type ingredients separated by commas (carrot,beef,potato...)'
                    value={search}
                    onChange={updateSearch}/>
                <button type="submit">Search</button>
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
                        url={recipe.sourceUrl}
                        dishtypes={recipe.dishTypes}
                        time={recipe.readyInMinutes}
                        ingredients={recipe.extendedIngredients}
                        instructions={recipe.instructions}
                        />
        
                ))}
            </div>
            
        </div>
    );
}

export default Listings;