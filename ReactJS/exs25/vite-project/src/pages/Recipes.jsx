const recipes = [
  {
    id: 1,
    name: "Classic Chocolate Cake",
    description: "Rich and moist chocolate cake perfect for any occasion",
    category: "desserts",
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    description: "Traditional Italian pasta with creamy egg sauce",
    category: "dinner",
  },
  {
    id: 3,
    name: "Greek Salad",
    description: "Fresh Mediterranean salad with feta cheese",
    category: "lunch",
  },
  {
    id: 4,
    name: "Breakfast Smoothie Bowl",
    description: "Healthy and colorful breakfast bowl",
    category: "breakfast",
  },
];

function Recipes() {
  return (
    <main className="page">
      <h1>All Recipes</h1>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <h2>{recipe.name}</h2>

            <p>{recipe.description}</p>

            <span>{recipe.category}</span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Recipes;
