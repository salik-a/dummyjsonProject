import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        height: 150,
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        margin: 10,
        borderRadius: 10,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: 'black',
        padding: 5
    },
    textStyle: { fontSize: 18, color: 'white' }
})