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
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

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
    defaultNavigationOptions: defaultStackNavigationOptions,
  },
);

const FavNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        headerTitle: 'Your Favorites',
      },
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  },
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Meals',
      tabBarColor: 'rgba(16,126,177,255)',
      // tabBarIcon: () => {
      //   return <Ionicons name="ios-home" color="blue" size={25} />;
      // },
    },

    // navigationOptions: {
    //   tabBarIcon: () => {
    //     return <Ionicons name="ios-restaurant" size={25} color="#eeeeee" />;
    //   },
    // },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarColor: Colors.accentColor, //tabBarColor only works if shifting=true
      // TabBarIcon: (tabInfo) => {
      //   return <Ionicons name="ios-star" size={25} />;
      // },
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        // if shifting is true label only exists on tab which is active
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: 'white',
        },
      });

export default createAppContainer(MealsFavTabNavigator);
