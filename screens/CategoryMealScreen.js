import React from 'react';
import {
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {Ionicons} from 'react-native-vector-icons';

const CategoryMealScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <View style={styles.mealItem}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate({
              routeName: 'MealDetail',
              params: {
                mealId: itemData.item.id,
              },
            });
          }}>
          <View>
            <View style={styles.mealHeader}>
              <ImageBackground
                source={{uri: itemData.item.imageUrl}}
                style={styles.bgImage}>
                <Text style={styles.title} numberOfLines={1}>
                  {itemData.item.title}
                </Text>
              </ImageBackground>
            </View>
            <View style={styles.mealDetail}>
              <Text>{itemData.item.duration}m</Text>
              <Text>{itemData.item.complexity.toUpperCase()}</Text>
              <Text>{itemData.item.affordability.toUpperCase()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const catId = props.navigation.getParam('categoryId');
  //const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{width: '90%'}}
      />
      {/* <Text> The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to MealDetail"
        onPress={() => {
          props.navigation.navigate('MealDetail');
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      /> */}
    </View>
  );
};

// CategoryMealScreen.navigation = (itemset) => {
//   console.log(itemset);
// };

// CategoryMealScreen.Options = (navigationData) => {
//   console.log(navigationData);
// };

// CategoryMealScreen.navigationOptions = (navigationData) =>
//   console.log(navigationData);

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  screen: {
    backgroundColor: 'rgba(0,0,0,1)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealHeader: {
    flexDirection: 'row',
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: '15%',
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f595',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'OpenSans-SemiBoldItalic',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
});

export default CategoryMealScreen;
