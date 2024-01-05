import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function RegistroScreen({navigation}:any) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>REGISTRARSE</Text>
        <Text>  </Text>
        <img src='https://th.bing.com/th/id/OIP.JpWcvibu5U1Gnl2YlJe9wAAAAA?rs=1&pid=ImgDetMain' style={styles.image}/>
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