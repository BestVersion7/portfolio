import React, { useState, useEffect } from "react";
import RecipeForm from './RecipeForm';
import RecipeLayout from './RecipeLayout';

export default () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState("true");
  //api call default link to that
  const apicall = async (e = "chicken") => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`
    );
    const data = await response.json();
    const items = data.meals;

    /*debugging
    console.log(items)
    */
    if (items !== null) {
      setRecipes(items);
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  useEffect(() => {
    apicall();
  }, []);

  return (
    <>
      <RecipeForm
        ChangeOption = {apicall}
      />

      {loading ?
        <p> Loading... </p> :
        recipes.map((item,index) =>
        <RecipeLayout
          item = {item}
          key = {index}
        />
      )}
    </>
  );
};
