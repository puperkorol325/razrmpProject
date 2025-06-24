import React, { useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Input, Layout, Text } from "@ui-kitten/components";
import { ScrollView } from "react-native";
import { addHistory, clearHistory, useAppDispatch, useAppSelector } from "../../redux/store";
import { Method1, Method1Description } from "../../methods/Method1";
import { Method2, Method2Description } from "../../methods/Method2";
import { Method3, Method3Description } from "../../methods/Method3";
import { Method4, Method4Description } from "../../methods/Method4";

export const HomeScreen: React.FC<{ navigation: any}> = ({ navigation }) => {

    const [lowBorder, setLowBorder] = useState<number>(0);
    const [topBorder, setTopBorder] = useState<number>(0);
    const [selectedMethod, setSelectedMethod] = useState<Function | null>(null);
    const [description, setDescription] = useState<string>('');

    const dispatch = useAppDispatch();
    const history = useAppSelector((state) => state.history);

    const search = () => {
        if (selectedMethod) {
            let date: Date = new Date();
            dispatch(addHistory(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}] - Начат поиск: ${description}`));
            for (let i = lowBorder; i < topBorder; i++) {
                const result: boolean = selectedMethod(i);
                if (result) {
                    const date: Date = new Date();
                    dispatch(addHistory(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}] - ${i}`));
                }
            }
            date = new Date();
            dispatch(addHistory(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}] - Поиск завершен`));
        }else {
            alert('Вы не выбрали задачу');
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
                <Layout style={styles.taskChoice}>
                    <Button style={styles.taskButton} onPress={() => {setSelectedMethod(() => Method1); setDescription(Method1Description)}}>Числа Цукер</Button>
                    <Button style={styles.taskButton} onPress={() => {setSelectedMethod(() => Method2); setDescription(Method2Description)}}>Числа Нивена</Button>
                    <Button style={styles.taskButton} onPress={() => {setSelectedMethod(() => Method3); setDescription(Method3Description)}}>Числа Арм</Button>
                    <Button style={styles.taskButton} onPress={() => {setSelectedMethod(() => Method4); setDescription(Method4Description)}}>Числа Лишрел</Button>
                </Layout>

                <Layout style={styles.range}>
                    <Input label='Нижняя граница' value={lowBorder.toString()} keyboardType="number-pad" onChangeText={(newText: string) => setLowBorder(+newText)}/>
                    <Input label='Верхняя граница' value={topBorder.toString()} keyboardType="number-pad" onChangeText={(newText: string) => setTopBorder(+newText)}/>
                </Layout>
                <Layout style={styles.buttons}>
                    <Button style={styles.controlButton} onPress={() => search()}>Запустить поиск</Button>
                    <Button style={styles.controlButton} onPress={() => navigation.navigate('History')}>История</Button>
                    <Button style={styles.clearButton} onPress={() => dispatch(clearHistory())}>Очистить историю</Button>
                </Layout>
                <Layout style={styles.historyContainer}>
                    <ScrollView>
                        <Text style={styles.history}>{history.history.join('\n')}</Text>
                    </ScrollView>
                </Layout>
            </Layout>
        </LinearGradient>
    )
}