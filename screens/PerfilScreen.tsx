import { StyleSheet, Text,TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function PerfilScreen({ navigation }: any) {

    const [apodo, setApodo] = useState('')

  return (
    <View>
      <Text>PERFIL</Text>

      <Text>INFORMACION</Text>

      <TextInput
        placeholder='Ingrese un apodo'
        onChangeText={(texto) => setApodo(texto)}
        style={styles.input}

      />

      <TouchableOpacity style={styles.edit} onPress={() => navigation.goBack()}>
        <Text style={{ color: 'green', textDecorationLine: 'underline' }}>Editar</Text>
      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
    edit: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: 'white',
        height: 50,
        width: '100%',
        borderRadius: 25,
        paddingHorizontal: 20,
        marginBottom: 20,
      }
})