const categories = [
  {
    id: "breakfast",
    name: "Breakfast",
    description: "Start your day right",
  },
  {
    id: "lunch",
    name: "Lunch",
    description: "Midday favorites",
  },
  {
    id: "dinner",
    name: "Dinner",
    description: "Evening meals",
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet treats",
  },
];

function Categories() {
  return (
    <main className="categories-page">
      <h1>Categories</h1>

      <div className="category-list">
        {categories.map((category) => (
          <div className="category" key={category.id}>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Categories;
