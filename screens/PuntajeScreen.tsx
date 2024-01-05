import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function PuntajeScreen({navigation}:any) {
  return (
    <View>
      <Text>PUNTUACIÓN ANTERIOR</Text>
      <Text>Puntaje: {}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Volver al juego</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})