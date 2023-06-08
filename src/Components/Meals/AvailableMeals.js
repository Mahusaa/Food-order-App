import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";
import useDataFetcher from "../../hooks/useDataFetcher";


const AvailableMeals = () => {
  const {data, isLoading, error}= useDataFetcher("https://fetch-meals-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json", "GET");
  console.log(data);
  let content = null
  if (isLoading){
    content = <p className={classes.isLoading}>is Loading...</p>
  }else if (error) {
    content = <p>data not found, {error}</p>
  } else if (data) {
    const mealsList = data.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
    content = <ul>{mealsList}</ul>
  };
  
  
  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
