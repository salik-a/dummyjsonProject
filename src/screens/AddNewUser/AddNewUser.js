import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';

import AddNewUserLayout from './AddNewUserLayout/AddNewUserLayout'

import {
    setNewUser,
} from '../../redux/general/general.actions';

export default function AddNewUser({ navigation, route }) {

    const dispatch = useDispatch()

    const [addNewUserData, setAddNewUserData] = useState({
        firstName: '',
        age: ''
    })

    const handleAddUser = () => {
        dispatch(setNewUser(addNewUserData));
        navigation.goBack()
    }


    return (
        <AddNewUserLayout
            navigation={navigation}
            addNewUserData={addNewUserData}
            setAddNewUserData={setAddNewUserData}
            handleAddUser={handleAddUser}
        />
    )
}