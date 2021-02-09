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

export default function App() {
  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  screen: {},
});
