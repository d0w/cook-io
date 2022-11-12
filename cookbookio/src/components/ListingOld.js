import axios from "axios";

export default function Listing(props){
     var recipes = Array(5)
     const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
      params: {
        ingredients: props.ingredients,
        number: '5',
        ignorePantry: 'true',
        ranking: '1'
      },
      headers: {
        'X-RapidAPI-Key': 'd72340653cmsh492c7c86742913dp17b7d4jsn265838768460',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
        for(let i = 0; i < 5; i++){
            //recipes[i] = response.data[i]
            //console.log(i, recipes[i])
        }
        const data = response.data
        console.log(data)

    }).catch(function (error) {
        console.error(error);
   
    });

    return( 
    <div>
        {console.log()}
    <h1> Recipes:  </h1> 
   <h2> Hi: {} </h2>
   </div>  
   )

}




