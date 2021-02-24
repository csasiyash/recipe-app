import React from 'react';
import {MEALS} from '../data/dummy-data';
import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import {Text} from 'react-native';

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');
  //const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navData) => {
  // console.log('navdata.navigation has ', navData.navigation);
  const catId = navData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  // console.log(selectedCategory);
  // console.log('cat id is', catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;
