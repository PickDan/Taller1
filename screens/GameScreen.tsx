import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import insecto from '../components/insecto'

const Datos=[
    { id: '1', nombre: 'Cucaracha', imagen: require('./assets/insectos/cucaracha.jpg') },
    { id: '2', nombre: 'Mosca', imagen: require('./assets/insectos/mosca.jpg') },
]
export default function GameScreen() {
  return (
    <View>
      <Text>Ventana Juego</Text>

    </View>
  )
}

const styles = StyleSheet.create({})