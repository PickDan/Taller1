import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
//FIREBASE
import { ref, set } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../config/Config';


export default function RegistroScreen({ navigation }: any) {

  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')
  const [apodo, setapodo] = useState('')

  function guardar(correo: string, apodo: string) {
    set(ref(db, 'usuarios/' + apodo), {
      email: correo,
      nick: apodo
      
    });
  }

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

        switch(errorCode){
          case "auth/weak-password":
            Alert.alert("ERROR", "MINIMO 6 CARACTERES");
            break;
          case "auth/invalid-email":
              Alert.alert("ERROR", "CORREO NO VALIDO");
              break;
          case "auth/missing-password":
            Alert.alert("ERROR", "ESCRIBA UN PASSWORD");
            break;
          case "auth/missing-email":
            Alert.alert("ERROR", "ESCRIBA UN CORREO");
            break;
          default:
            Alert.alert("ERROR");
            break;
        }
      });

  }
  function GuardaryRegistrar() {
    // promise all  toma un array de promesas y devuelve una nueva promesa que se ejecuta cuando todas las promesas en el array se han resuelto. 
    Promise.all([guardar(correo, apodo), registro()])
      .then(() => {
        console.log('Ambas funciones de Firebase ejecutadas correctamente.');
      })
      .catch((error) => {
        console.error('Error al ejecutar funciones', error);
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

      <Button title='Registrarse' onPress={GuardaryRegistrar} />
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