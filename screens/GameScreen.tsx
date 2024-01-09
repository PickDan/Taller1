import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import "react-native-gesture-handler"
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import Game from '../components/Game'


export default function GameScreen():JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: 'gray'}}>
      <Game/>
    </GestureHandlerRootView>
        
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