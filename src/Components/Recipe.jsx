import { useEffect, useState } from "react";
import RecipeCart from "./RecipeCart";
import ShowDetails from "./ShowDetails";

const Recipe = ({showDetails,showD, currentCock, currentCocking}) => {
    const [recipes, setrecipes] = useState([])
    useEffect(()=>{
        fetch('Food.json')
        .then(res=>res.json())
        .then(data => setrecipes(data))
    }, [])
    // console.log(recipes);
    return (
        <div className="mt-8">
            <div>
            <h1 className="text-4xl font-semibold text-center">Our Recipes</h1>
            <h1 className=" text-lg font-normal text-center px-2 lg:px-36">Perfect for organizing and promoting your healthy, green vision of the foods you sell or offer. These cards look great!your guests at your next promotion or event! </h1>
            </div>
            <div className="mt-6 flex  md:flex-row flex-col justify-between gap-8">
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2  gap-5 items-center justify-center">
                    {
                        recipes.map(r => <RecipeCart key={r.recipe_id} 
                            showDetails={showDetails}
                            recipe={r} ></RecipeCart>)
                    }
                </div>
                <div className="md:w-1/3">
                    <ShowDetails currentCocking={currentCocking} currentCock={currentCock} showD={showD}></ShowDetails>
                </div>
            </div>
        </div>
    );
};

export default Recipe;