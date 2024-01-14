import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
//FIREBASE
import { ref, set } from "firebase/database";
import { db } from '../config/Config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';

export default function RegistroScreen({navigation}:any) {
  
  const [correo, setCorreo] = useState('')
  const [contrasenia, setContrasenia] = useState('')
  const [nick, setNick] = useState('')
  const [ciudad, setCiudad] = useState('')

  //CREATE - SET - GUARDAR
  function guardar(nick: string, correo: string, contrasenia: string, ciudad: string) {
    //const db = getDatabase();
    set(ref(db, 'usuarios/' + nick), {
      email: correo,
      password: contrasenia,
      city : ciudad

      
    });
  }
  
  function registrar(){
    //const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, contrasenia)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      //console.log('REGISTRO CORRECTO')
      navigation.navigate('Login')

      setNick('')
      setCorreo('')
      setContrasenia('')
      setCiudad('')

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
        placeholder='Ingrese un Correo'
        style={styles.input}
        onChangeText={(texto)=>setCorreo(texto)}
        value={correo}
        />
        <TextInput
        placeholder='Ingrese una Contraseña'
        style={styles.input}
        onChangeText={(texto)=>setContrasenia(texto)}
        value={contrasenia}
        />
        <TextInput
        placeholder='Ingrese su Nick'
        style={styles.input}
        onChangeText={(texto)=>setNick(texto)}
        value={nick}
        />
        <TextInput
        placeholder='Ingresa tu Ciudad'
        style={styles.input}
        onChangeText={(texto)=>setCiudad(texto)}
        value={ciudad}
        />
        <TouchableOpacity style={styles.forgotPassword}>
            <Text>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        
        <Text>  </Text>

        <Button title='Registrarse'onPress={ ()=> registrar()} />
        <Button title='GUARDAR' onPress={()=>guardar(nick,correo,contrasenia,ciudad)}/>
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
      
})