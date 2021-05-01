import React from 'react';
import {View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    }}>
      <View style={{height: 50, backgroundColor: 'red', alignSelf: 'stretch'}}/>
      <View style={{height: 50, backgroundColor: 'yellow'}}/>
      <View style={{height: 50, backgroundColor: 'green'}}/>
    </View>
  );
}


