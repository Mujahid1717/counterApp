import { StyleSheet, Text, View} from 'react-native';
import  { useState,React } from 'react';
import CounterView from '../components/CounterView';
import CounterController from '../components/CounterController';


const CounterScreen = ({customValueParentState}) => {
    const [counter,setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <CounterView counterValue = {counter}/>
      <CounterController setCounterValue = {setCounter} 
      customValueParentState={customValueParentState}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
export default CounterScreen;