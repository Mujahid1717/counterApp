import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CounterView = ({counterValue}) => {
  return (
    <View>
      <Text style={styles.container}>{counterValue}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    fontSize:40,
    fontWeight:'bold',
    marginBottom:20

  }
});

export default CounterView;