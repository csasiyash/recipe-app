import Colors from '../constants/Colors';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import {Ionicons} from 'react-native-vector-icons';
import React from 'react';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories',
      },
    },
    CategoryMeal: {
      screen: CategoryMealScreen,
      navigationOptions: {
        headerTitle: 'SelectedCategoryName',
      },
    },
    MealDetail: {
      screen: MealDetailScreen,
      navigationOptions: {
        headerTitle: 'SelectedMealName',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: 'white',
    },
  },
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      // navigationOptions: {
      //   tabBarIcon: (tabInfo) => {
      //     return (
      //       <Ionicons
      //         name="ios-restaurant"
      //         size={25}
      //         color={tabInfo.tintColor}
      //       />
      //     );
      //   },
      // },
    },
    Favorites: {
      screen: FavoritesScreen,
      // navigationOptions: {
      //   tabBarIcon: (tabInfo) => {
      //     return (
      //       <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      //     );
      //   },
      // },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  },
);

export default createAppContainer(MealsFavTabNavigator);
