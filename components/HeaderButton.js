import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from 'react-native-vector-icons';
import Colors from '../constants/Colors';

//By  returning {...props} we are passing all the key value pairs to headrButton
const CustonHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Colors.primaryColor}
    />
  );
};
