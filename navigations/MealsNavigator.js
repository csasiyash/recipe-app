import Colors from '../constants/Colors';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';
//import Ionicons from 'react-native-vector-icons';
import React from 'react';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// import {Icon} from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createDrawerNavigator} from 'react-navigation-drawer';

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
    },
    CategoryMeal: {
      screen: CategoryMealScreen,
      // navigationOptions: {
      //   headerTitle: 'SelectedCategoryName',
      // },
    },
    MealDetail: {
      screen: MealDetailScreen,
      navigationOptions: {
        // headerTitle: 'SelectedMealName',
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
      tabBarColor: Colors.primaryColor,
      tabBarIcon: (tabInfo) => {
        return <Icon name="utensils" size={24} color={tabInfo.tintColor} />;
      },
    },
  },

  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarColor: Colors.accentColor, //tabBarColor only works if shifting=true
      tabBarIcon: (tabInfo) => {
        return <Icon name="heartbeat" size={24} color={tabInfo.tintColor} />;
      },
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

// we are using a stack navigator to make a filter screen just to have a bydefault header feature
const FilterNavigator = createStackNavigator({
  FilterNav: {
    screen: FilterScreen,
    navigationOptions: {
      headerTitle: 'Filterss',
    },
  },
});

const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsFavTabNavigator,
  Filters: FilterNavigator,
});

export default createAppContainer(MainNavigator);
