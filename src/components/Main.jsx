import {useState} from "react"

function Main() {

    const [ingredients, setIngredients] = useState([])
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return(
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input type="text" aria-label="Add ingredient" placeholder="e.g. oregano" className="field-add-ingredient" name="ingredient" />
                <button className="btn-add-ingredient">+ Add Ingredient</button>
            </form>
            {ingredients.length > 0 ? 
            <section className="width-container">
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section> : null}
        </main>
    )
}

export default Main