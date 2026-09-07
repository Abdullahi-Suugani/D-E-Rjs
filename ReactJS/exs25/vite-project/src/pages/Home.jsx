import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <h1>Welcome to Recipe Book</h1>

      <p>Discover delicious recipes and start cooking today!</p>

      <div className="home-buttons">
        <Link to="/recipes" className="home-card">
          <h2>Browse Recipes</h2>
          <p>Explore our collection of delicious recipes</p>
        </Link>

        <Link to="/categories" className="home-card">
          <h2>Recipe Categories</h2>
          <p>Find recipes by category</p>
        </Link>
      </div>
    </main>
  );
}

export default Home;
