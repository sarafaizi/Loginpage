import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'
import LoginPage from '../screens/LoginPage'

const Loading = ({ changeIsLOading }) => {
    return (
        <View style={styles.Container}>
            <Pressable style={[{}, styles.closebuttonContainer]}
                onPress={() => changeIsLOading()}>

                <Text
                    style={styles.closebutton}>
                    X
                </Text>
            </Pressable>
            <ActivityIndicator size={'large'} />
            <Text style={styles.LoginText} >Loading...</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
    LoginText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        margin: 10,
    },
    closebuttonContainer: {
        backgroundColor: 'white',
        width: 35,
        height: 35,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 63,
        left: 14,
    },
    closebutton: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    }

})