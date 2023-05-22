import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';

const CounterController = ({setCounterValue,customValueParentState}) => {
    console.log(customValueParentState)
    const incrementValue = ()=>{
       setCounterValue((tempValue)=>{
        return parseInt (tempValue) + parseInt(customValueParentState);
       });
        
    };
    const decrementValue =()=>{
        setCounterValue((tempValue)=>{
            return tempValue - customValueParentState ;
           }); 
    }
  return (
    <View style= {styles.mainCont}>
        <TouchableOpacity style={styles.container} 
        onPress={()=>decrementValue()}>
            <Text style={styles.textStyle}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}
         onPress={()=>incrementValue()}>
            <Text style={styles.textStyle}>Increment</Text>
        </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
    mainCont:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'90%',
           
     },
 container:{
    backgroundColor:'blue',
    padding:15, 
    borderRadius:15  
 },
 textStyle:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
 }
});

export default CounterController;