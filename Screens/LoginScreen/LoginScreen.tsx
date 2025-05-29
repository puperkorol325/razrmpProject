import {  Button, Layout, Text, Icon, Avatar, Input } from '@ui-kitten/components';
import React, { useState } from 'react';
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native';
import { Divider } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';

const hideIcon = require('../../img/hide.png');
const showIcon = require('../../img/show.png');
const appIcon = require('../../img/icon.png');
const googleIcon = require('../../img/google.png');
const yandexIcon = require('../../img/yandex.png');

export const LoginScreen: React.FC<{ navigation: any}> = ({ navigation }) => {

    const [secureEntry, setSecureEntry] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wrongInput, setWrongInput] = useState(false);

    const renderIcon = (props: any): React.ReactElement => (
        <TouchableWithoutFeedback onPress={() => setSecureEntry(!secureEntry)}>
          <Avatar
           {...props}
           source={secureEntry ? showIcon : hideIcon}
            >
          </Avatar>
        </TouchableWithoutFeedback>
    );

    const checkData = (email: string, password: string): boolean => {
        if (email === "testuser@gmail.com" && password === "testuser") {
            return true;
        }else {
            setWrongInput(true);
            return false;
        }
    }

    return (
        <LinearGradient 
        colors={['#4635B1', '#B771E5']}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}>
            <Layout style={styles.container}>
                <Layout style={styles.title}>
                    <Avatar source={appIcon}></Avatar>
                    <Text style={styles.titleText}>NeonCalc</Text>
                </Layout>
                <Text style={styles.authTitle}>Авторизация</Text>
                <Layout style={styles.authForm}>
                    <Input style={wrongInput ? styles.wrongInput : ''} label='Email' placeholder='Введите свой email' value={email} onChangeText={(newValue) => {setEmail(newValue); setWrongInput(false)}}></Input>
                    <Input style={wrongInput ? styles.wrongInput : ''} label='Password' placeholder='Введите свой пароль' value={password} onChangeText={(newValue) => {setPassword(newValue); setWrongInput(false)}} secureTextEntry={secureEntry} accessoryRight={renderIcon}></Input>
                    <Button style={styles.submitButton} onPress={() => {
                        if (checkData(email, password)) {
                            alert('Вы успешно авторизовались!');
                        }else {
                            setWrongInput(true);
                            alert('Вы ввели неверные данные!');
                        }
                    }}>Авторизоваться</Button>
                    <Text style={styles.regText}>
                    Впервые здесь?
                        <Text style={styles.regSrc} onPress={() => navigation.navigate('Signup')}>
                            Зарегистрируйтесь
                        </Text>
                    </Text>
                </Layout>
                <Divider style={styles.divider}/>
                <Layout style={styles.otherOptionsOfAuth}>
                    <Button style={styles.authButton} accessoryRight={<Avatar source={googleIcon} />}>Вход через Google</Button>
                    <Button style={styles.authButton} accessoryRight={<Avatar source={yandexIcon} />}>Вход через Яндекс ID</Button>
                </Layout>
            </Layout>
        </LinearGradient>
    )
}