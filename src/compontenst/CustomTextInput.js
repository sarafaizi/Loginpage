import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({ title, isSecureText, onChangeText, value, placeholder, keyboardType }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputtext}>{title}</Text>
            <TextInput
                secureTextEntry={isSecureText}
                placeholder={placeholder}
                style={styles.TextInputStyle}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    inputContainer: {
        width: '80%'

    },
    inputtext: {
        fontWeight: 'bold',
        margin: 10
    },
    TextInputStyle: {
        borderBottomWidth: 1,
        borderBottomStartRadius: '0%',
        width: '100%',
        height: 50,
        borderRadius: 34,
        marginVertical: 15,
        textAlign: 'center',
        color: 'gray',
        fontWeight: 'bold',
    },

})
export default CustomTextInput