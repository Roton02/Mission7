import { CiTimer } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
const RecipeCart = ({ recipe,showDetails }) => {
  // console.log(currentCock);
  const {recipe_name,recipe_image, short_description,preparing_time,calories,ingredients} = recipe;
  return (
    <div>
      <div className="card w-96 bg-gray-50 border-2">
        <figure className="">
          <img src={recipe_image}  alt="Shoes" className="rounded-xl w-72 h-72" />
        </figure>
        <div className="card-body space-y-1 ">
          <h2 className="card-title font-bold">{recipe_name}</h2>
          <p>{short_description}</p>
          {/* <div className="divider-vertical text-black h-2 w-52">  </div> */}
            <div>
                <p className="text-xl">Ingredients: {ingredients.length} </p>
                <ul>
                    {
                        ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex gap-10 ">
              <h1 className="text-sm font-normal"><CiTimer /> {preparing_time} minit</h1>
              <h1 className="text-sm font-normal"><FaFire /> {calories} minit</h1>
            </div>
          <div className="card-actions justify-start">
      <button onClick={()=>showDetails(recipe)} className="btn bg-green-600 rounded-xl text-black font-semibold">Want to Cook</button>
    </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCart;
