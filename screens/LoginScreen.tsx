import { Button, StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

//Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';
import GameScreen from './GameScreen';
import Game from '../components/Game';


export default function LoginScreen({ navigation }: any) {

  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')

  function login() {
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;


        console.log('Credenciales correctas')
        setcorreo('')
        setcontrasenia('')

        navigation.navigate(Game)


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode)
        console.log(errorMessage)

        switch (errorMessage) {
          case 'auth/invalid-email':
            Alert.alert("ERROR", "Credenciales incorrectas");
            break;
          case 'auth/wrong-password':
            Alert.alert("ERROR", "Contraseña incorrecta");
            break;
          case 'auth/missing-password':
            Alert.alert("ERROR", "Ingrese la contraseña");
            break;
          case 'auth/user-not-found':
            Alert.alert("ERROR", "Usuario no encontrado.... debes registrate!");
            break;
          default:
            Alert.alert("ERROR");
            break;
        }

      });
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        placeholder='Ingresar email'
        keyboardType='email-address'
        style={styles.input}
        value={correo}
        onChangeText={(texto) => setcorreo(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder='Ingresar contrasenia'
        value={contrasenia}
        onChangeText={(texto) => setcontrasenia(texto)}
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}onPress={() => navigation.navigate('Registro')}> 👉 Regístrate aquí 👈</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef5db',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    fontSize: 16,
    color: '#3498db',
    textDecorationLine: 'underline',
  },

})