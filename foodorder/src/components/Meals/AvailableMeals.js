import { useEffect, useState } from 'react';
import React from 'react'
import Card from '../Ui/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [data, setdata] = useState([]);
  const[error,seterror] = useState(null);

  const [loading, setloading] = useState(true)
  useEffect(() => {
    const fetchmeals = async () => {

      const response = await fetch('https://react-http-f6d9a-default-rtdb.firebaseio.com/meals.json');

      if(!response.ok)
      {
        throw new Error("somthig wrong");
      }
      const responsedata = await response.json();


      const loadedmeals = [];

      for (const key in responsedata) {
        loadedmeals.push({
          id: key,
          name: responsedata[key].name,
          description: responsedata[key].description,
          price: responsedata[key].price


        })
      }
      setdata(loadedmeals);
      setloading(false);
    };
    fetchmeals().catch((error)=>{
      setloading(false);
      seterror(error.message);
    });
  }, []);
  if (loading) {
    return (
      <section className={classes.mealsloading}>
      <p>loading</p>
      </section>
    )
  }
  if (error) {
    return (
      <section className={classes.MealsError}>
        <p>{error}</p>
      </section>
    );
  }

  const MealsList = data.map((meal) =>
  (<MealItem
    key={meal.id}
    id={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
  />
  ));

  return (<section className={classes.meals}>
    <Card>
      <ul>{MealsList}</ul>
    </Card>
  </section>
  )
}

export default AvailableMeals