import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function RegistroScreen({navigation}:any) {
  return (
    <View>
        <Text>REGISTRARSE</Text>
        <Text></Text>
        <img src='https://th.bing.com/th/id/OIP.JpWcvibu5U1Gnl2YlJe9wAAAAA?rs=1&pid=ImgDetMain'/>
        <Text>  </Text>
        <TextInput
        placeholder='Usuario'
        />
        <TextInput
        placeholder='Contraseña'
        />
        <TouchableOpacity>
            <Text>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>¿No tienes cuenta? Crear una</Text>
        </TouchableOpacity>
        <Text>  </Text>
        <Button title='Registrarse' onPress={()=>navigation.navigate('Tab')}/>
    </View>
  )
}

const styles = StyleSheet.create({})