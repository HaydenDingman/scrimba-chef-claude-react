import {useState} from "react"

function Main() {

    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"])
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return(
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
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