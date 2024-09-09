import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <View style={styles.circle_small}></View>
      </View>
      
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.main_text}>GROW</Text>
        <Text style={styles.main_text}>YOUR BUSINESS</Text>
      </View>

      <View style={{paddingHorizontal: 20}}>
        <Text style={{ fontSize: 15, fontWeight: 600,  textAlign: 'center'}} >View be help you to grow your business using online server</Text>
      </View>

      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.btn_children}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btn_children}>SIGN UP</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#00ccf9',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  circle : {
    width: '50%',
    height: '30%',
    backgroundColor: '#000',
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  circle_small : {
    width: '90%',
    height: '90%',
    backgroundColor: '#00ccf9',
    borderRadius: '100%'
  },
  main_text : {
    fontWeight: 800,
    fontSize: 20,
  },
  btn_container : {
    width: '90%',
    justifyContent : 'space-between',
    flexDirection: 'row',    
  },
  button : {
    backgroundColor: '#e3c000',
    padding: 10,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'red'
  },
  btn_children : {

  }

});
