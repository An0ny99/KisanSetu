import React, {Component} from 'react';
import {StyleSheet, Text, View, Image,Dimensions, TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import * as Animatable from 'react-native-animatable';
const {width,height} = Dimensions.get('window')
export function Splashscreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Animatable.View animation="slideInDown" style={styles.header}>
        <Image source={require('../images/kisan.png')} style={styles.img} />
      </Animatable.View>
      <Animatable.View animation="slideInUp" style={styles.footer}>
        <Text style={styles.title}>Welcome to Kisan Setu</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}  >
            <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
            <Text>Register</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e92f3',
  },
  header: {
    paddingTop:30,
    alignItems: 'center',
    justifyContent:'center'
  },
  footer: {
    flex:1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#003c8f',
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  img: {
    marginTop: 60,
    height: 400,
    width: 400,
    resizeMode: 'contain',
  },
  button:{
      marginTop:20,
      width:'90%',
      alignItems:'center',
      backgroundColor:'white',
      padding:20,
      borderRadius:8,
      fontWeight: '500',
      fontSize: 30,
  }
});
