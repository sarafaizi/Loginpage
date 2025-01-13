import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import Loading from '../compontenst/Loading.js';
import { CustomTextInput, CustomButton } from '../compontenst/index.js'
import { useDispatch, useSelector } from 'react-redux';
import { setIsloading, setLogin } from '../redux/UserSlice.js';
import { login } from '../redux/UserSlice.js';


const LoginPage = ({ navigation }) => {
  const [Email, setEmail] = useState("");

  const [Password, setPassword] = useState("");
  const Isloading = useSelector((state) => state.user)
  console.log(Email, Password, Isloading);
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/e7276a1a9302b906c1f6bd11e50c4831.jpg')}
      />

      <Text style={styles.Welcome}>Welcome</Text>

      <CustomTextInput
        title="Email"
        isSecureText={false}
        onChangeText={(text) => {
          setEmail(text);
        }}
        value={Email}
        placeholder="Enter Email Address"
        keyboardType="email-address"
      />

      <CustomTextInput
        title="Password"
        isSecureText={true}
        onChangeText={(text) => setPassword(text)}
        value={Password}
        placeholder="Enter Your Password"
        keyboardType="numeric"
      />

      <CustomButton
        buttonText="Login"

        onPress={() => dispatch(login({ Email, Password }))
        }
        buttonColor='pink'
        pressedButtonColor='gray'

      />

      <CustomButton
        buttonText="SignUp"
        setwidht="80%"
        onPress={() => navigation.navigate('Sign')}
        buttonColor='gray'
        pressedButtonColor='lightgray'
      />





      {Isloading && <Loading changeIsLOading={() => dispatch(setIsloading(false))} />}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 45,
    marginBottom: 50,
  },
  Welcome: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 30,
  },

});
