const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
  params: {
    ingredients: 'apples,flour,sugar',
    number: '5',
    ignorePantry: 'true',
    ranking: '1'
  },
  headers: {
    'X-RapidAPI-Key': '7957cb8127msh973c5a78f7b4a47p17b934jsne0ec1fd84c29',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});