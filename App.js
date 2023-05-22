import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CounterScreen from './src/screens/CounterScreen';
import CounterCustomSet from './src/components/CounterCustomSet';
const App = () => {
  const [customValueParentState,setCustomValueParentState] = useState(1);
  
  return (
    <View style={styles.container}>
      <CounterScreen customValueParentState={customValueParentState}/>
      <CounterCustomSet setCustomValueParentState={setCustomValueParentState} 
      customValueParentState={customValueParentState}/>
      </View>  
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  
}
});


export default App;