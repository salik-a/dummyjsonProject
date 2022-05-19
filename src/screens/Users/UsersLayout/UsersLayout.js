import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Button } from 'react-native'
import React from 'react'

import UserCard from '../Components/UserCard/UserCard'

import styles from './UsersLayout.style'

export default function UsersLayout({
    navigation,
    usersData
}) {


    const renderItem = ({ item }) => (

        <UserCard
            onPress={() => { navigation.navigate('UserDetail', { userId: item.id }) }}
            name={item?.firstName}
            age={item?.age}
            image={item?.image}
        />

    )

    const renderListEmptyComponent = () => (
        <View style={styles.emptyListContainer}>
            <Text>No Data</Text>
        </View>
    )

    let num = 2

    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={styles.header}
            >
                Users
            </Text>
            <Button title={'ADD NEW'} onPress={() => navigation.navigate('AddNewUser')} style={{ position: 'absolute', bottom: 0 }} />
            <View style={styles.body}>
                <FlatList
                    style={styles.listStyle}
                    data={usersData}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item.id}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={renderListEmptyComponent}
                    numColumns={num}
                />
            </View>
      
        </SafeAreaView>
    )
}