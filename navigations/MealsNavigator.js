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
import {Platform, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// import {Icon} from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createDrawerNavigator} from 'react-navigation-drawer';

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: 'OpenSans-BoldItalic',
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Italic',
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
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{fontFamily: 'OpenSans-Bold'}}>Meals</Text>
        ) : (
          'Meals'
        ),
      tabBarColor: Colors.primaryColor,
      tabBarIcon: (tabInfo) => {
        return <Icon name="utensils" size={24} color={tabInfo.tintColor} />;
      },
    },
  },

  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{fontFamily: 'OpenSans-Bold'}}>Favorites</Text>
        ) : (
          'Favorites'
        ),
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
        // MaterialTabBottomNavigator used for android and it doesnt have many features of editing as they are present in BottomTabNavigator, therefore for styling we have used Text component in tabBarLabel
        // if shifting is true label only exists on tab which is active
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'OpenSans-Regular',
          },
          activeTintColor: 'white',
        },
      });

// we are using a stack navigator to make a filter screen just to have a bydefault header feature
const FilterNavigator = createStackNavigator(
  {
    FilterNav: {
      screen: FilterScreen,
      navigationOptions: {
        headerTitle: 'Filters',
      },
    },
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  },
);

//we add DrawerNavigator on screens on which we want to see Drawer
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FilterNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        //fontFamily: 'OpenSans-Italic',
      },
    },
  },
);

export default createAppContainer(MainNavigator);
