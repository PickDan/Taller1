import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function insecto({nombre, imagen, onPress}:any) {
  return (
    <TouchableOpacity onPress={onPress}>
        <Image source={imagen}/>
        <Text>{nombre}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})