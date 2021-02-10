import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const renderGridItem = (itemData) => {
  return (
    <View style={styles.categoriesScreen}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = (props) => {
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesScreen: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default CategoriesScreen;
