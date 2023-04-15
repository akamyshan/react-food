import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import { getMealById } from "../api";
import { Ingredients } from "../components/Ingredients";

function Recipe() {
    const { id } = useParams();
    const { goBack } = useHistory();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        getMealById(id).then((data) => {
            setRecipe({ ...data.meals[0] });
        });
    }, [id]);

    return (
        <>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h1>{recipe.strMeal}</h1>
            <h5>Category: {recipe.strCategory}</h5>
            <h5>Area: {recipe.strArea}</h5>
            <h6>Tags: {recipe.strTags}</h6>
            <p>{recipe.strInstructions}</p>
            <Ingredients {...recipe} />
            <br></br>
            {recipe.strYoutube ? (
                <iframe
                    width="560"
                    height="315"
                    src={
                        "https://www.youtube.com/embed/" +
                        recipe.strYoutube.slice(-11)
                    }
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            ) : null}
            <br></br>
            <a href={recipe.strSource}>Source</a>
            <br></br>
            <a className="btn" onClick={goBack}>
                GO BACK
            </a>
        </>
    );
}
export { Recipe };
