import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function PuntajeScreen({navigation}:any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PUNTUACIÓN ANTERIOR</Text>
      <Text style={styles.puntaje}>Puntaje : {}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Volver al juego</Text>
      </TouchableOpacity>
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
      puntaje: {
        fontSize: 18,
        marginBottom: 20,
      },
      button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
})