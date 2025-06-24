import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container : {
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: '5%',
        width: '90%',
        height: '80%',
        borderRadius: 10,
        paddingTop: '7%'
    },
    historyContainer: {
        width: '90%',
        height: '70%',
        backgroundColor: 'lightgray',
        borderRadius: 30,
        padding: '5%'
    },
    history: {
        color: 'gray',
        height: '100%'
    },
    titleText: {
        fontSize: 32,
        color: '#000000',
        fontFamily: 'Poppins_600SemiBold',
    },
    getBackButton: {
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        width: 60,
        height: 60
    },
    getBackLayout: {
        justifyContent: 'flex-start',
        width: '90%'
    }
});