import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {MEALS} from '../data/dummy-data';
import CustomHeaderButton from '../components/HeaderButton';

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navData) => {
  const mealId = navData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id == mealId);
  //console.log(selectedMeal);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Fav" iconName="star" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
