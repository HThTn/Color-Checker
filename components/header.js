import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
const Header = props => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{props.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerView: {
    height: 65,
    backgroundColor: '#eceff1',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
