import { StyleSheet, Text, View, SafeAreaView, Button, Image, Pressable } from 'react-native'
import React from 'react'
import { CustomTextInput, CustomButton } from '../compontenst'
import { useState } from 'react'
import { app } from '../../App'

const Signup = ({ navigation }) => {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState(0)


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Image
                    style={styles.image}
                    source={require('../../assets/add-user.png')} />
                <Text style={styles.SignUp}>SignUp</Text>

            </View>

            <View style={styles.textInputContainer}>
                <CustomTextInput
                    isSecureText={false}
                    placeholder={"Enter Your Name"}
                    value={Name}
                    onChangeText={setName}
                    title={"Name"}
                    style={styles.TextInputStyle}
                />


                <CustomTextInput
                    isSecureText={false}
                    placeholder={"Enter Your Email"}
                    value={Email}
                    onChangeText={setEmail}
                    title={"Email"}
                    style={styles.TextInputStyle}
                    keyboardType="email-address"
                />

                <CustomTextInput
                    isSecureText={true}
                    placeholder={"Enter Your Password"}
                    value={Password}
                    onChangeText={setPassword}
                    title={"Password"}
                    style={styles.TextInputStyle}
                />
            </View>

            <View style={styles.SignupOptions}>
                <CustomButton
                    buttonText={"Sign Up"}
                    buttonColor='lightblue'
                    pressedButtonColor="gray"

                />

                <Text>
                    Already have an account?{' '}
                    <Pressable
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: 'lightblue', textDecorationLine: 'underline', fontWeight: 'bold' }}>Login</Text>
                    </Pressable>
                </Text>

            </View>


        </SafeAreaView>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    SignUp: {
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 20,
        color: 'lightblue',
    },
    textInputContainer: {
        flex: 2,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    SignupOptions: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginBottom: 15,
    },
    TextInputStyle: {
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
    },
});
