import React from 'react'
import { StyleSheet, Text, View,TextInput , TouchableOpacity,Image,ScrollView,SafeAreaView} from 'react-native'
import * as Animatable from 'react-native-animatable';

export default function Login({navigation}) {
    return (
        <SafeAreaView style={{ flex:1,  height: '100%' }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex:1,  height: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
        <Animatable.View animation="fadeIn" style={styles.container} >
             <Image source={require('../images/kisan.png')} style={styles.img} />
            <Text style={styles.header}>LOGIN</Text>
            <TextInput style={styles.place}
            placeholder={'Email ID'}
            />
            <TextInput style={styles.place}
            placeholder={'Password'}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}  >
            <Text style={styles.t1}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}  onPress={() => navigation.navigate('Register')}  >
            <Text style={styles.t1}>Don't Have An Account ? Register Here</Text>
        </TouchableOpacity>
        </Animatable.View>
       </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:'100%',
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
        padding: 15,
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
        marginBottom:110
    },
    t1:{
        color:'white'
    }

})
