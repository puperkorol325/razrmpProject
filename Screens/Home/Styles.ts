import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        width: '90%',
        height: '80%',
        borderRadius: 10,
    },
    taskChoice: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        width: '90%',
        height: '20%',
        flexWrap: 'wrap',
    },
    taskButton: {
        backgroundColor: '#003092',
        color: '#000',
        width: '45%',
        height: '40%'
    },
    range: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        height: '15%',
    },
    history: {
        color: 'gray',
        height: '100%',
    },
    historyContainer: {
        width: '90%',
        height: '25%',
        backgroundColor: 'lightgray',
        borderRadius: 30,
        padding: '5%',
    },
    buttons: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '90%',
        height: '20%',
    },
    controlButton: {
        width: '100%',
        backgroundColor: '#003092',
        color: '#000'
    },
    clearButton: {
        width: '100%',
        backgroundColor: '#B771E5',
        color: '#000000',
    }
});