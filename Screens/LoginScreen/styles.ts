import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'space-around',
      width: '90%',
      height: '70%',
      borderRadius: 10,
    },
    title: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 28,
        color: '#B771E5',
        fontFamily: 'Poppins_600SemiBold',
    },
    authTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: 'Poppins'
    },
    authForm: {
      width: '90%',
      height: '35%',
      justifyContent: 'space-around',
    },
    submitButton: {
      backgroundColor: '#B771E5',
      borderWidth: 0,
      alignItems: 'center'
    },
    wrongInput: {
      borderColor: 'red',
    },
    regText: {
      textAlign: 'center'
    },
    regSrc: {
      color: '#003092'
    },
    divider: {
      width: '90%',
    },
    otherOptionsOfAuth: {
      width: '90%',
      height: '20%',
      justifyContent: 'space-around'
    },
    authButton: {
      backgroundColor: '#003092',
      color: '#000',
    }
});