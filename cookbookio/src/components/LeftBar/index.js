import './index.scss'
import { useState, useRef } from 'react';
import Listings from '../Listings';

const LeftBar = () => {

    const [ingredients, setIngredients] = useState({
      ingredients: ""
    });
    //const [isFormVisible, setIsFormVisible] = useState(true);

    const formRef = useRef();

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);

        setIngredients({[name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ingredients);
        //console.log(inputFileRef?.current?.files);
        //setIsFormVisible(false);
    };

    return (
    <>
        <form id="form" onSubmit={handleSubmit} className="row"
        ref={formRef}>
          <h1>Ingredients</h1>
          <div className="col-md-6">
            <label>Ingredients</label>
            <input
              placeholder="Text input"
              name="ingredients"
              value={ingredients.ingredients}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="color-primary">
            Save
          </button>
        </form>
        {/* <form id='ingredient-form' onSubmit={handleSubmit}>
            <label>Ingredients</label>
            <input type="text">
            </input>
            <button type="submit">Submit</button>
        </form> */}
        <Listings data={ingredients} />
    </>
  );
};

export default LeftBar;