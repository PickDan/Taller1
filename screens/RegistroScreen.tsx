import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
//FIREBASE
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';


export default function RegistroScreen({ navigation }: any) {

  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')
  const [apodo, setapodo] = useState('')

  function registro() {
    //const auth = getAuth();
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

        if (errorCode === 'auth/weak-password') {
          Alert.alert("Error", "La contrasenia debe poseer 6 caracteres")
        }
      });

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡REGÍSTRATE AHORA!</Text>
      <Image source={{ uri: 'https://th.bing.com/th/id/OIP.JpWcvibu5U1Gnl2YlJe9wAAAAA?rs=1&pid=ImgDetMain' }} style={styles.image} />

      <TextInput
        placeholder='Usuario'
        keyboardType='email-address'
        onChangeText={(texto) => setcorreo(texto)}
        style={styles.input}
      />

      <TextInput
        placeholder='Contraseña'
        onChangeText={(texto) => setcontrasenia(texto)}
        style={styles.input}
        secureTextEntry={true}
      />

      <TextInput
        placeholder='Ingrese un apodo'
        onChangeText={(texto) => setapodo(texto)}
        style={styles.input}
        
      />

      <TouchableOpacity style={styles.createAccount} onPress={() => navigation.goBack()}>
        <Text style={{ color: 'green', textDecorationLine: 'underline' }}>¿Ya tienes cuenta? Inicia Sesión</Text>
      </TouchableOpacity>

      <Button title='Registrarse' onPress={() => registro()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 15,
    width: '100%',
    backgroundColor: '#fff',
    color: '#333',
  },
  forgotPassword: {
    marginBottom: 10,
  },
  createAccount: {
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})