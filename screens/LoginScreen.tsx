import { Button, StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

//Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';


export default function LoginScreen({navigation}: any) {
  
    const [correo, setcorreo] = useState('')
    const [contrasenia, setcontrasenia] = useState('')
  
    function login(){
        signInWithEmailAndPassword(auth, correo, contrasenia)
          .then((userCredential) => {
          // Signed in 
            const user = userCredential.user;
            
            navigation.navigate("GameScreen")
      
            setcorreo('')
            setcontrasenia('')
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
          console.log(errorCode)
          console.log(errorMessage)

          switch (errorCode) {
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
    <View>
      <Text style={{fontSize:30}}>LoginScreen</Text>

      <TextInput
        placeholder='Ingresar email'
        keyboardType='email-address'
        style={styles.input}
        value={correo}
        onChangeText={(texto)=>setcorreo(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder='Ingresar contrasenia'
        value={contrasenia}
        onChangeText={(texto)=>setcontrasenia(texto)}
      />

      <Button title='Ingresar' onPress={()=> login() }/>
      
      <Text onPress={()=> navigation.navigate('Registro')}> 👉 Regístrate aquí 👈</Text>  
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#eef5db',
        alignItems: 'center',
        justifyContent: 'center',
    
      },
      title:{
        fontSize:40,
        fontWeight:'bold',
        marginBottom:30
      },
      input:{
        backgroundColor:'white',
        height:70,
        width:'75%',
        borderRadius:30,
        paddingHorizontal:50,
        marginBottom: 20
      }
    
})