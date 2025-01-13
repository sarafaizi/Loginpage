import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LoginPage, Signup, HomePage } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='Login'
        >
            <Stack.Screen name='Login' component={LoginPage} />
            <Stack.Screen name='Sign' component={Signup} />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})