import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';

const MealList = (props) => {
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

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        //style={{width: '90%'}}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '97%',
    backgroundColor: '#f5f566',
    marginVertical: 10,
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
