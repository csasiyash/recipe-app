import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <View style={styles.categoriesGridScreen}>
        <TouchableNativeFeedback
          onPress={() =>
            props.navigation.navigate('CategoryMeal', {
              categoryId: itemData.item.id,
            })
          }>
          <View
            style={{
              ...styles.container,
              ...{backgroundColor: itemData.item.color},
            }}>
            <Text style={styles.title}>{itemData.item.title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="bars"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  categoriesGridScreen: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    elevation: 15,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'OpenSans-BoldItalic',
    fontSize: 17,
  },
});

export default CategoriesScreen;
