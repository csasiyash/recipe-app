import Colors from '../constants/Colors';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

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

export default createAppContainer(MealsNavigator);
