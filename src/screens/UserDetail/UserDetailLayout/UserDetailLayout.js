import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'


import styles from './UserDetailLayout.style'

export default function UserDetailLayout({
    navigation,
    userDetailData
   
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

            <View style={styles.row}>
                <Text>Name: </Text>
                <Text>{userDetailData.firstName}</Text>
            </View>
            <View style={styles.row}>
                <Text>Age: </Text>
                <Text>{userDetailData.age}</Text>
            </View>
            <View style={styles.row}>
                <Text>Gender: </Text>
                <Text>{userDetailData.gender}</Text>
            </View>
            <View style={styles.row}>
                <Text>Email: </Text>
                <Text>{userDetailData.email}</Text>
            </View>
      
        </SafeAreaView>
    )
}