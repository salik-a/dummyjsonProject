import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

// import { useSelector } from 'react-redux'

import UserDetailLayout from './UserDetailLayout/UserDetailLayout'

export default function UserDetail({ navigation, route }) {

   

    const [userDetailData, setUserDetailData] = useState([])

    useEffect(() => {
        
    }, [])


    return (
        <UserDetailLayout
            navigation={navigation}
            userDetailData={userDetailData}

        />
    )
}