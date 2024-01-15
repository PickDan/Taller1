import { StyleSheet, Text,TextInput, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

export default function PerfilScreen({ navigation }: any) {

    const [apodo, setApodo] = useState('')

  return (
    <View>
      <Text>PERFIL</Text>

      <Image source={{ uri: 'https://img.freepik.com/fotos-premium/avatar-chico-anime-fuego-fondo-cara-perfil-frontal-nino-llamas_967743-602.jpg' }} style={styles.image} />

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
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    }
})