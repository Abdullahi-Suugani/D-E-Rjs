import { Routes, Route, Link, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Categories from "./pages/Categories";

function App() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            Recipe Book
          </Link>

          <div className="nav-links">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>

            <Link
              to="/recipes"
              className={location.pathname === "/recipes" ? "active" : ""}
            >
              Recipes
            </Link>

            <Link
              to="/categories"
              className={location.pathname === "/categories" ? "active" : ""}
            >
              Categories
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
