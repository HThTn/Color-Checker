import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import Header from '../components/header';
import ColorControl from '../components/colorControl';
const colorChecker = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [hexcolor, sethexcolor] = useState('000000');
  function sliceHex(Hexstring) {
    const r = Hexstring.slice(0, 1);
    const g = Hexstring.slice(2, 3);
    const b = Hexstring.slice(4, 5);
  };
  function hexToDec(hexVal) {
    var len = hexVal.length;

    // Initializing base value to 1, i.e 16^0
    var base = 1;

    var dec_val = 0;

    // Extracting characters as digits from last
    // character
    for (var i = len - 1; i >= 0; i--) {
      // if character lies in '0'-'9', converting
      // it to integral 0-9 by subtracting 48 from
      // ASCII value
      if (hexVal.charAt(i) >= '0'
        && hexVal.charAt(i) <= '9') {
        dec_val += (hexVal.charAt(i).charCodeAt(0) - 48) * base;

        // incrementing base by power
        base = base * 16;
      }

      // if character lies in 'A'-'F' , converting
      // it to integral 10 - 15 by subtracting 55
      // from ASCII value
      else if (hexVal.charAt(i) >= 'A'
        && hexVal.charAt(i) <= 'F') {
        dec_val += (hexVal.charAt(i).charCodeAt(0) - 55) * base;

        // incrementing base by power
        base = base * 16;
      }
    }
    return dec_val;
  };
  function decToHexa(colorCode) {
    let hexCode = Number(colorCode).toString(16);

    return (hexCode.length == 1) ? ('0' + hexCode) : hexCode;
  }

  function onHexaChange(Hexstring) {
    sethexcolor(Hexstring);
    const r = hexToDec(Hexstring.slice(0, 2));
    const g = hexToDec(Hexstring.slice(2, 4));
    const b = hexToDec(Hexstring.slice(4, 6));
    if (r != red) setRed(r);
    if (g != green) setGreen(g);
    if (b != blue) setBlue(b);
  }
  return (
    <View style={styles.container}>
      <Header name="Color Checker" />
      <View style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
        <View style={styles.contentWrapper}>
          {/* <View
            style={{
              flex: 1,
              backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            }}>
            </View> */}
          <View style={styles.controls}>
            <ColorControl
              title="Red"
              value={red}
              onChangeText={value => {
                setRed(value);
                sethexcolor(decToHexa(value) + hexcolor.slice(2));
              }}
              maxLength={3}
            />
            <ColorControl
              title="Green"
              value={green}
              onChangeText={value => {
                setGreen(value);
                sethexcolor(hexcolor.slice(0,2) + decToHexa(value) + hexcolor.slice(4,6));
              }}
              maxLength={3}
            />
            <ColorControl
              title="Blue"
              value={blue}
              onChangeText={value => {
                setBlue(value);
                sethexcolor(hexcolor.slice(0,4) + decToHexa(value));
              }}
              maxLength={3}
            />
          </View>
          <ColorControl
            title="Hex"
            value={hexcolor}
            onChangeText={value => {
              onHexaChange(value.toUpperCase());
            }}
            maxLength={6}
          />
          <Text style={{margin: 5, fontSize: 16}}>RGB({red}, {green}, {blue})</Text>
          <Text style={{margin: 5, fontSize: 16}}>Hex #{hexcolor}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    height: 150,
    width: '90%',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  controls: {
    flex: 1,
    flexDirection: 'row',

  },
});
export default colorChecker;
