import React from 'react';
import CategoriesScreen from './screens/CategoriesScreen';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MealsNavigator from './navigations/MealsNavigator';
import {enableScreens} from 'react-native-screens';

enableScreens(); //preferably done in larger app for smooth performance. only declare it nothing else to do

export default function App() {
  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  screen: {},
});
