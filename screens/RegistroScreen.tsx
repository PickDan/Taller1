import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
//FIREBASE
import { ref, set } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../config/Config';


export default function RegistroScreen({ navigation }: any) {

  const [correo, setCorreo] = useState('')
  const [contrasenia, setContrasenia] = useState('')
  const [apodo, setApodo] = useState('')
  const [nombre, setNombre] = useState('')
  
  const [userId, setuserId] = useState('')


  function registro() {
        createUserWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log('REGISTRO CORRECTO')
        //navigation.navigate('Login')

        console.log(user.uid);

        /*setCorreo('')
        setContrasenia('')
        setApodo('')
        setCiudad('')*/

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
  
   //CRATE - SET - GUARDAR
   function guardar(userId: string, apodo: string, correo: string, nombre: string) {
    set(ref(db, 'usuarios/' + userId), {
      nick: apodo,
      email: correo,
      name: nombre
    });
  }


  function compuesta(){
    registro();
    guardar(apodo,correo, contrasenia,nombre)
  }




  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡REGÍSTRATE AHORA!</Text>
      <Image source={{ uri: 'https://th.bing.com/th/id/OIP.JpWcvibu5U1Gnl2YlJe9wAAAAA?rs=1&pid=ImgDetMain' }} style={styles.image} />

      <TextInput
        placeholder='Ingrese un Correo'
        keyboardType='email-address'
        onChangeText={(texto) => setCorreo(texto)}
        style={styles.input}
        value={correo}
      />

      <TextInput
        placeholder='Ingrese una Contraseña'
        onChangeText={(texto) => setContrasenia(texto)}
        style={styles.input}
        secureTextEntry={true}
        value={contrasenia}
      />

      <TextInput
        placeholder='Ingrese un Apodo'
        onChangeText={(texto) => setApodo(texto)}
        style={styles.input}
        value={apodo}
      />

      <TextInput
        placeholder='Ingrese su Nombre'
        onChangeText={(texto) => setNombre(texto)}
        style={styles.input}
        value={nombre}
      />

      <TouchableOpacity style={styles.createAccount} onPress={() => navigation.goBack()}>
        <Text style={{ color: 'green', textDecorationLine: 'underline' }}>¿Ya tienes cuenta? Inicia Sesión</Text>
      </TouchableOpacity>

      <Button title='Registrar' onPress={()=> compuesta() }/>
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

//<Button title='Guardar' onPress={()=> guardar(apodo, correo, contrasenia, ciudad) }/>
//<Button title='Registrar' onPress={()=> registro() }/>