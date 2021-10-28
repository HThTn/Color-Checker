import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
const ColorControl = props => {

  return (
    <View style={styles.control}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
          style={styles.input}
          onChangeText={props.onChangeText}
          value={props.value}
          maxLength={props.maxLength}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  control: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 32,
    margin: 5,
    borderWidth: 1,
    padding: 5,
    width: 65,
  },
});
export default ColorControl;
