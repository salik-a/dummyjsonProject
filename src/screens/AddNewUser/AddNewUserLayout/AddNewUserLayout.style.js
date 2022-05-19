import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', padding: 20 },
    row: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 },
    inputContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: 'gray',
        alignItems: 'center',
        flexDirection: 'row',
    }

})