import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

// import { useSelector } from 'react-redux'

import UsersLayout from './UsersLayout/UsersLayout'

export default function Users({ navigation, route }) {

   

    const [usersData, setUsersData] = useState([])

    useEffect(() => {
        
    }, [])


    return (
        <UsersLayout
            navigation={navigation}
            usersData={usersData}

        />
    )
}