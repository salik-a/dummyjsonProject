import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'

import UserServices from '../../services/userServices'

import UserDetailLayout from './UserDetailLayout/UserDetailLayout'

export default function UserDetail({ navigation, route }) {

    const userId = route.params.userId
    const userServices = new UserServices()

    const [userDetailData, setUserDetailData] = useState([])
    const [userDetailDataLoading, setUserDetailDataLoading] = useState(true)

    useEffect(() => {
        userServices.getUserDetails(userId)
            .then((res) => {
                console.log(res.data)
                setUserDetailData(res.data)
                setUserDetailDataLoading(false)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }, [])

    if (userDetailDataLoading) {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator color={'black'} size={24} />
            </SafeAreaView>
        )
    }
    return (
        <UserDetailLayout
            navigation={navigation}
            userDetailData={userDetailData}

        />
    )
}