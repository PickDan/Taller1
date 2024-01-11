import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
//FIREBASE
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';

export default function RegistroScreen({navigation}:any) {
  
  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')
  
  function registro(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, contrasenia)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      //console.log('REGISTRO CORRECTO')
      navigation.navigate('Login')

      setcorreo('')
      setcontrasenia('')
      
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      console.log(errorCode)
      
      if(errorCode ==='auth/weak-password'){
        Alert.alert("Error", "La contrasenia debe poseer 6 caracteres")
      }
  });

  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>REGISTRARSE</Text>
        <Text>  </Text>
        <Image source={{uri: 'https://th.bing.com/th/id/OIP.JpWcvibu5U1Gnl2YlJe9wAAAAA?rs=1&pid=ImgDetMain'}} style={styles.image}/>
        <Text>  </Text>
        <TextInput
        placeholder='Usuario'
        style={styles.input}
        />
        <TextInput
        placeholder='Contraseña'
        style={styles.input}
        />
        <TouchableOpacity style={styles.forgotPassword}>
            <Text>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAccount}>
            <Text>¿No tienes cuenta? Crear una</Text>
        </TouchableOpacity>
        <Text>  </Text>
        <Button title='Registrarse' onPress={()=>navigation.navigate('Tab')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
      },
      forgotPassword: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginBottom: 10,
      },
      createAccount: {
        color: 'green',
        textDecorationLine: 'underline',
        marginBottom: 20,
      },
})