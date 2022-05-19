import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Button } from 'react-native'
import React from 'react'


import styles from './AddNewUserLayout.style'

export default function AddNewUserLayout({
    navigation,
    addNewUserData,
    setAddNewUserData,
    handleAddUser
}) {

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                <TouchableOpacity
                    style={{ padding: 10, borderRadius: 25, borderWidth: 1 }}
                    onPress={() => navigation.goBack()}
                >
                    <Text>Go Back</Text>
                </TouchableOpacity>
                <View />
            </View>

            <Text>First Name:</Text>
            <View style={styles.inputContainer}>

                <TextInput
                    onChangeText={(text) => setAddNewUserData(exInfos => ({ ...exInfos, firstName: text }))}
                    style={{ flex: 1 }}
                />
            </View>
            <Text>Age:</Text>
            <View style={styles.inputContainer}>

                <TextInput
                    onChangeText={(text) => setAddNewUserData(exInfos => ({ ...exInfos, age: text }))}
                    style={{ flex: 1 }}
                />
            </View>
            <Button title={'ADD NEW'} onPress={() => handleAddUser()} />


        </SafeAreaView>
    )
}