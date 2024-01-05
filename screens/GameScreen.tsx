import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import insecto from '../components/insecto'

{/*const Datos=[
    { id: '1', nombre: 'Cucaracha', imagen: require('./assets/insectos/cucaracha.jpg') },
    { id: '2', nombre: 'Mosca', imagen: require('./assets/insectos/mosca.jpg') },
]*/}
export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CAZA DE INSECTOS</Text>
      <Text style={styles.puntaje}>Puntaje: 0</Text>
      <Text style={styles.tiempo}>Tiempo restante: 60 segundos</Text>
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
        marginBottom: 10,
      },
      tiempo: {
        fontSize: 16,
        marginBottom: 20,
      },
})