import {useState} from "react"

function Main() {

    const [ingredients, setIngredients] = useState([])
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return(
        <main>
            <form className="add-ingredient-form" action={handleSubmit}>
                <input type="text" aria-label="Add ingredient" placeholder="e.g. oregano" className="field-add-ingredient" name="ingredient" />
                <button className="btn-add-ingredient">+ Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}

export default Main