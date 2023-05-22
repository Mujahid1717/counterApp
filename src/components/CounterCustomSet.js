import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

const CounterCustomSet = ({setCustomValueParentState}) => {
  const [customValue,setCustomValue] = useState(1);

  const applyChangeInState = (text)=>{
    setCustomValue(text);
    setCustomValueParentState(text);
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Enter Number' 
      style= {styles.input}
      value={customValue}
      onChangeText={text=>applyChangeInState(text)}
      />
    </View>
  )
}



const styles = StyleSheet.create({
 container:{
  flex:1,
  alignItems:'center'
 },
 input:{
  borderWidth:2,
  borderColor:'skyblue',
  width:"80%",
  fontSize:20
 }
});
export default CounterCustomSet;