import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'

// import { useSelector } from 'react-redux'

import UsersLayout from './UsersLayout/UsersLayout'

import UserServices from '../../services/userServices'

export default function Users({ navigation, route }) {

    const userServices = new UserServices()

    const [usersData, setUsersData] = useState([])
    const [usersDataLoading, setUsersDataLoading] = useState(true)

    useEffect(() => {
        userServices.getAllUsers()
            .then((res) => {
                setUsersData(res.data.users)
                setUsersDataLoading(false)
            })
            .catch((err) => {
                console.log(err.response)
            })          
    }, [])

    if (usersDataLoading) {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator color={'black'} size={24} />
            </SafeAreaView>
        )
    }

    return (
        <UsersLayout
            navigation={navigation}
            usersData={usersData}

        />
    )
}