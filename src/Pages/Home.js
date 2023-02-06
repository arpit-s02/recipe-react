import React, { useState } from "react";
import Card from "../Components/Card";
import styles from "../Styles/home.module.css";
import Loader from "../Components/Loader";

const Home = () => {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const APP_ID = "ba520093";
  const APP_KEY = "4573bab7197f249f9caa698160a81391";

  const fetchRecipes = async (e) => {
    setLoading(true);
    e.preventDefault();
    let response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
    setLoading(false);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.search}>
        <h1>Recipe Search</h1>
        <div>
          <form onSubmit={fetchRecipes}>
            <input
              className={styles.searchBar}
              type="search"
              placeholder="Search a recipe"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={fetchRecipes}> Search </button>
          </form>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        recipes.length > 0 && (
          <div className={styles.allCardsContainer}>
            {recipes.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Home;
