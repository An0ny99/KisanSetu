import React from 'react'
import { StyleSheet, Text, View,TextInput , TouchableOpacity,Image} from 'react-native'
import * as Animatable from 'react-native-animatable';

export default function Register({navigation}) {
    return (
        <Animatable.View animation="fadeIn" style={styles.container} >
             <Image source={require('../images/kisan.png')} style={styles.img} />
            <Text style={styles.header}>REGISTER</Text>
            <TextInput style={styles.place}
            placeholder={'Name'}
            />
            <TextInput style={styles.place}
            placeholder={'Email ID'}
            />
            <TextInput style={styles.place}
            placeholder={'Password'}
            />
            <TextInput style={styles.place}
            placeholder={'Confirm Password'}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}  >
            <Text style={styles.t1}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}  onPress={() => navigation.navigate('Login')}  >
            <Text style={styles.t1}>Already Have An Account ? Login Here</Text>
        </TouchableOpacity>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#5e92f3'
    },
    header:{
        fontSize:40,
        fontWeight:'bold',
        color: '#003b8e'
    },
    img: {
        marginTop: 100,
        height: 200,
        width: 200,
        resizeMode: 'contain',
      },
    place:{
        marginTop:20,
        backgroundColor: '#e8e8e8',
        width: '80%',
        padding: 10,
        borderRadius: 8,
        color: 'black',
    },
    button: {
        marginTop:20,
        width:'80%',
        alignItems:'center',
        backgroundColor:'#003b8e',
        color:'white',
        padding:15,
        borderRadius:8,
        fontWeight: '500',
        fontSize: 30,
    },
    button1: {
        marginTop:20,
        width:'80%',
        alignItems:'center',
        padding:20,
        borderRadius:8,
        fontWeight: '500',
        fontSize: 30,
        marginBottom:100
    },
    t1:{
        color:'white'
    }

})
