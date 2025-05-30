import React, { useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Input, Layout, Text } from "@ui-kitten/components";
import { ScrollView } from "react-native";

export const HomeScreen: React.FC = () => {

    const [lowBorder, setLowBorder] = useState<string>('');
    const [topBorder, setTopBorder] = useState<string>('');

    const [history, setHistory] = useState<string[]>([]);

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
                <Layout style={styles.taskChoice}>
                    <Button style={styles.taskButton}>Задача 1</Button>
                    <Button style={styles.taskButton}>Задача 2</Button>
                    <Button style={styles.taskButton}>Задача 3</Button>
                    <Button style={styles.taskButton}>Задача 4</Button>
                </Layout>

                <Layout style={styles.range}>
                    <Input label='Нижняя граница' value={lowBorder.toString()} keyboardType="number-pad" onChangeText={(newText: string) => setLowBorder(newText)}/>
                    <Input label='Верхняя граница' value={topBorder.toString()} keyboardType="number-pad" onChangeText={(newText: string) => setTopBorder(newText)}/>
                </Layout>
                <Layout style={styles.historyContainer}>
                    <ScrollView>
                        <Text style={styles.history}>{history.join('\n')}</Text>
                    </ScrollView>
                </Layout>
            </Layout>
        </LinearGradient>
    )
}