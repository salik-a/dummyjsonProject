import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './UserCard.style'

export default function UserCard({
    name,
    age,
    image,
    onPress
}) {

    const imageUri = { uri: image ? image : "https://reactjs.org/logo-og.png" };

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >

            <ImageBackground
                source={imageUri}
                resizeMode="cover"
                style={{
                    flex: 1,
                    justifyContent: "flex-end"
                }}
            >
                <View style={styles.bottomContainer}>
                    <Text style={styles.textStyle} >{name}</Text>
                    <Text style={styles.textStyle} >{age}</Text>
                </View>
            </ImageBackground>


        </TouchableOpacity>
    )
}