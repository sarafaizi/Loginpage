import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import CustomButton from '../compontenst/CustomButton'

import { app } from '../../App'





const HomePage = () => {
    const [Data, setData] = useState([])
    const [Issaved, setIssaved] = useState(false)
    const [UpdatetheData, setUpdatetheData] = useState()
    const [selectedId, setSelectedId] = useState(null);


    console.log(Data)
    useEffect(() => {
        getData()
    }, [Issaved])

    const sendData = async () => {
        try {
            const docRef = await addDoc(collection(db, "ReactNateivedata"), {
                title: "sara",
                content: "faizi",
                born: 2006
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }

    const getData = async () => {
        const allData = []
        try {
            const querySnapshot = await getDocs(collection(db, "ReactNateivedata"));
            querySnapshot.forEach((doc) => {
                allData.push({ ...doc.data(), id: doc.id });
            })
            setData(allData);
        } catch (error) {

        }

    }
    const DeleteData = async (id) => {
        try {
            const delete1 = await deleteDoc(doc(db, "ReactNateivedata", id));
        } catch (error) {
            console.log(error)
        }
    }

    const UpdateData = async (value) => {
        try {
            const lesson = doc(db, "ReactNateivedata", value);
            await updateDoc(lesson, {
                content: UpdatetheData
            });
        } catch (error) {

        }



    }

    return (

        <View style={styles.container}>
            <TextInput
                value={UpdatetheData}
                onChangeText={setUpdatetheData}
                placeholder='Enter your Data'
                style={{
                    borderWidth: 1, width: '60%', height: 50, margin: 30, alignItems: 'center', textAlign: 'center'
                }}
            />
            {Data.map((value, index) => {
                return (
                    <Pressable
                        onPress={() => setSelectedId(value.id)}
                        key={index}>


                        <Text>{value.id}</Text>
                        <Text>{index} </Text>
                        <Text>{value.title}</Text>
                        <Text>{value.content} </Text>
                        <Text>{value.born}</Text>

                    </Pressable>
                )
            })}

            <CustomButton

                buttonText={"save"}
                buttonColor={'lightblue'}
                pressedButtonColor={'gray'}
                onPress={() => { sendData(), setIssaved(Issaved === false ? true : false) }}

            />
            <CustomButton
                buttonText={"Get Data"}
                buttonColor={'lightblue'}
                pressedButtonColor={'gray'}
                onPress={getData}
            />
            <CustomButton
                buttonText={"Delete Data"}
                buttonColor={'lightblue'}
                pressedButtonColor={'gray'}
                onPress={() => {
                    if (selectedId) DeleteData(selectedId), setIssaved(Issaved === false ? true : false)
                }} />


            <CustomButton
                buttonText={"Update Data"}
                buttonColor={'lightblue'}
                pressedButtonColor={'gray'}
                onPress={() => {
                    if (selectedId) UpdateData(selectedId), setIssaved(Issaved === false ? true : false)
                }
                }
            />


        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
})