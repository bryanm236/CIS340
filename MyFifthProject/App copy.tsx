import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.largeGreen}>This is Big Green Text</Text>

      <Text style={styles.red}>This is Red Text</Text>
      <Text style={[styles.red, styles.largeGreen]}> Red Text, then Big Green Text</Text>
      <Text style={[styles.largeGreen, styles.red]}> Big Green Text, then Red Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({

container: {
  marginTop: 60,
},

largeGreen: {
  color: 'green',
  fontWeight: 'bold',
  fontSize: 30,
},

red: {
  color: 'red',
  fontSize: 20,
}
});
