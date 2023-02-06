import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");

  const APP_ID = "ba520093";
  const APP_KEY = "4573bab7197f249f9caa698160a81391";

  const fetchRecipes = async () => {
    let response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        type="search"
        placeholder="Search a recipe"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={fetchRecipes}> Search </button>
      <div>{/* <Card /> */}</div>
    </div>
  );
};

export default Home;
