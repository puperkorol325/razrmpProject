import * as eva from '@eva-design/eva';
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

export const SignupScreen: React.FC<{navigation: any}> = ({ navigation }) => {

    const [secureEntry, setSecureEntry] = useState(true);

    const renderIcon = (props: any): React.ReactElement => (
        <TouchableWithoutFeedback onPress={() => setSecureEntry(!secureEntry)}>
          <Avatar
           {...props}
           source={secureEntry ? showIcon : hideIcon}
            >
          </Avatar>
        </TouchableWithoutFeedback>
    );

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
                <Text style={styles.authTitle}>Регистрация</Text>
                <Layout style={styles.authForm}>
                    <Input label='Name' placeholder='Введите свое имя'></Input>
                    <Input label='Email' placeholder='Введите свой email'></Input>
                    <Input label='Password' placeholder='Введите свой пароль' secureTextEntry={secureEntry} accessoryRight={renderIcon} caption='Должен быть длинее 8 символов'></Input>
                    <Input label='Confirm Password' placeholder='Подтвердите пароль' secureTextEntry={secureEntry} accessoryRight={renderIcon}></Input>
                    <Button style={styles.submitButton}>Зарегистрироваться</Button>
                    <Text style={styles.regText}>Уже бывали тут? <Text style={styles.regSrc} onPress={() => navigation.navigate('Login')}>Авторизуйтесь</Text></Text>
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