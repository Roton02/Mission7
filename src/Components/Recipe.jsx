import { useEffect, useState } from "react";
import RecipeCart from "./RecipeCart";
import ShowDetails from "./ShowDetails";

const Recipe = ({showDetails,showD}) => {
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
            <h1 className=" text-lg font-normal text-center px-36">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </h1>
            </div>
            <div className="mt-6 flex justify-between gap-8">
                <div className="w-2/3 grid grid-cols-2  gap-5 items-center justify-center">
                    {
                        recipes.map(r => <RecipeCart key={r.recipe_id} 
                            showDetails={showDetails}
                            recipe={r} ></RecipeCart>)
                    }
                </div>
                <div className="w-1/3">
                    <ShowDetails showD={showD}></ShowDetails>
                </div>
            </div>
        </div>
    );
};

export default Recipe;