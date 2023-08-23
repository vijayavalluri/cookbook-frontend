import React from "react";

// ... (Code for the dynamic components)
 const recipe = () => {
    const recipeproduct =  "Spaghetti Carbonara";
    const recipeDescription =
    "A classic Italian pasta dish with eggs, cheese, and pancetta.";

  const recipeImageUrl =
  "https://example.com/spaghetti_carbonara_image.jpg";

  const prepTime = "10 minutes";
  const cookTime = "15 minutes";
  const totalTime = `{${prepTime} + ${cookTime}}`;
  const servings = 4;
  const recipeIngredients = [
    { product: "spaghetti", amount: 12, unit: "ounces (340g)" },
    { product: "grated Pecorino Romano cheese", amount: 1, unit: "cup" },
    { product: "pancetta", amount: 4, unit: "ounces (115g)" },
    { product: "cloves garlic", amount: 2, unit: "minced" },
    { product: "salt", amount:"toTaste" , unit: "tsp" },
    { product: "black pepper", amount: "toTaste", unit: "tsp" },
    { product: "Chopped fresh parsley", amount: "forGarnish", unit: "handful" }
  ];

  const recipeInstructions = [
    "Bring a large pot of salted water to a boil. Add the spaghetti and cook according to the package instructions until al dente. Reserve 1 cup of pasta water, then drain the pasta.",
    "In a bowl, whisk together the eggs and grated Pecorino Romano cheese. Season with a pinch of black pepper.",
    "In a skillet, cook the diced pancetta over medium heat until it's crispy. Add the minced garlic and cook for another 1-2 minutes until fragrant.",
    "Add the cooked and drained spaghetti to the skillet with the pancetta and garlic. Toss to combine and heat for a minute.",
    "Remove the skillet from heat. Quickly pour in the egg and cheese mixture while continuously tossing the pasta to create a creamy sauce. If the sauce is too thick, gradually add a bit of the reserved pasta water to reach the desired consistency.",
    "Season with salt and additional black pepper if needed. Garnish with chopped fresh parsley.",
    "Serve the spaghetti carbonara immediately, while it's still warm."
  ];

  const recipeNotes = [  "Be sure to work quickly when adding the egg and cheese mixture to the pasta to avoid scrambling the eggs.",
  "You can substitute pancetta with guanciale or bacon if desired.",
  "For a healthier version, you can use whole wheat spaghetti and reduce the amount of cheese."
  ];

 }

 const RecipeName = ({ name}) => {
  return (
    <div className="flex justify-center my-3 my-lg-5 ">
      <div className="w-10/12 md:w-10/12 lg:w-8/12">
        <h1 className="text-center text-4xl font-extrabold pb-8">{name}</h1>
      </div>
    </div>
  );
};

const RecipeDescription = ({ description }) => {
  return (
    <div className="flex justify-center my-3 my-lg-5">
      <div className="w-10/12 md:w-10/12 lg:w-8/12">
        <p className="text-secondary text-center pb-8">{description}</p>
      </div>
    </div>
  );
};

const RecipeImage = ({ imageUrl, altText }) => {
  return (
    <div className="flex justify-center my-3 my-lg-5">
      <div className="w-10/12 md:w-10/12 lg:w-8/12">
        <div className="hover-img">
          <img
            className="img-fluid rounded mx-auto d-block w-1/2 p-3 shadow"
            src={imageUrl}
            alt={altText}
            title={altText}
          />
          <div className="hover-caption">
            <span className="shadow-lg">{altText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecipeIngredients = ({ ingredients }) => {
  return (
    <div className="flex justify-center my-3 my-lg-5">
      <div className="w-10/12 md:w-10/12 lg:w-8/12">
        <h2 className="text-secondary text-center">Ingredients</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Amount</th>
                <th scope="col">Unit</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr key={index}>
                  <td>{ingredient.product}</td>
                  <td>{ingredient.quantity}</td>
                  <td>{ingredient.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  
  const RecipeInstructions = ({ description }) => {
    return (
      <div className="flex justify-center my-3 my-lg-5">
        <div className="w-10/12 md:w-10/12 lg:w-8/12">
          <p className="text-secondary text-center pb-8">{description}</p>
        </div>
      </div>
    );
  };
  

  return (
    <>
      <RecipeName name={recipeName} />
      <RecipeDescription description={recipeDescription} />
      <RecipeImage imageUrl={recipeImageUrl} altText={recipeAltText} />
      <RecipeIngredients ingredients={recipeIngredients} />
      {/* <RecipeDirections directions={recipeDirections} /> */}
    </>
  );
};

export default recipe;

// { `${recipeCatogorie}:${recipeName}` }