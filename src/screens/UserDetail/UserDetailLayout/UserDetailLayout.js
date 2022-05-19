import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'


import styles from './UserDetailLayout.style'

export default function UserDetailLayout({
    navigation,
  
   
}) {

    return (
        <SafeAreaView style={styles.container}>

            {/* <PageHeader
                onPress={() => navigation.goBack()}
                title={route.params.demand.id}
            />
            */}
      
        </SafeAreaView>
    )
}