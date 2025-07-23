import {useState} from "react"
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

function Main() {

    const apikey = process.env.HF_ACCESS_TOKEN;

    const [ingredients, setIngredients] = useState(["radish", "onion", "oregano", "plum"])

    const [recipeShown, setRecipeShown] = useState(false);

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toggleRecipeShown() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown);
    }

    return(
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input type="text" aria-label="Add ingredient" placeholder="e.g. oregano" className="field-add-ingredient" name="ingredient" />
                <button className="btn-add-ingredient">+ Add Ingredient</button>
            </form>
            {ingredients.length > 0 ? <IngredientsList ingredients={ingredients} handleClick={toggleRecipeShown} /> : null}
            {recipeShown ? <ClaudeRecipe /> : null}
        </main>
    )
}

export default Main