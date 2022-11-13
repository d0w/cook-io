import fetch from 'node-fetch';

const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd72340653cmsh492c7c86742913dp17b7d4jsn265838768460',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));

    return( 
    <div>
        {console.log()}
    <h1> Joke:  </h1> 
   <h2> Hi: {options} </h2>
   </div>  
   )



