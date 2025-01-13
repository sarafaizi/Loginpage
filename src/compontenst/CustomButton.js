import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ buttonText, setwidht, onPress, buttonColor, pressedButtonColor }) => {
    return (
        <Pressable
            onPress={() => {
                onPress();
            }}

            style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed ? pressedButtonColor : buttonColor,
                    // Use dynamic width here
                    // Dinamik genişlik
                },
            ]}>
            <Text style={styles.buttonTextStyle}>{buttonText}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        width: '80%',
        height: 50,
        borderRadius: 34,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextStyle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
})