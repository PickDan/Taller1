import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import GameScreen from '../screens/GameScreen'
import PuntajeScreen from '../screens/PuntajeScreen'
import RegistroScreen from '../screens/RegistroScreen'
import LoginScreen from '../screens/LoginScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs(){
    return(
    <Tab.Navigator>
        <Tab.Screen name='Game' component={GameScreen}/>
        <Tab.Screen name='Puntuación' component={PuntajeScreen}/>
    </Tab.Navigator>
    )
}

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Registro' component={RegistroScreen}/>
            <Stack.Screen name='Tab' component={MyTabs}/>
            <Tab.Screen name='Game' component={GameScreen}/>
        </Stack.Navigator>
    )
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})