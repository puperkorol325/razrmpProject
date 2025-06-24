import React, { useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar, Button, Layout, Text } from "@ui-kitten/components";
import { ScrollView } from "react-native";
import {  useAppDispatch, useAppSelector } from "../../redux/store";

const backIcon = require('../../img/left-arrow.png');

export const HistoryScreen: React.FC<{ navigation: any}> = ({ navigation }) => {

    const dispatch = useAppDispatch();
    const history = useAppSelector((state) => state.history);

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
                <Layout style={styles.getBackLayout}>
                    <Button style={styles.getBackButton} onPress={() => navigation.navigate('Home')}>
                        <Avatar source={backIcon}></Avatar>
                    </Button>
                </Layout>
                <Text style={styles.titleText}>История</Text>
                <Layout style={styles.historyContainer}>
                    <ScrollView>
                        <Text style={styles.history}>{history.history.join('\n')}</Text>
                    </ScrollView>
                </Layout>
            </Layout>
        </LinearGradient>
    )
}