import { FlatList, Platform, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native"
import { theme } from "../themes/theme";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ITask } from "../@types/task";

export const ToDoList = () => {

    const [input, setInput] = useState<string>('');
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const save = (text: string) => {

        const newList = [...todoList, 
            {
                title: text
            }
        ];

        setTodoList(newList);
        storeData(newList);
    }

    const storeData = async (value: ITask[]) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('todo_list', jsonValue);
        } catch (e) {
            // saving error
            console.log("🚀 ~ storeData ~ e:", e);
        }
    };

    const getData = async (): Promise<ITask[]> => {
        try {

            const jsonValue = await AsyncStorage.getItem('todo_list');

            if (jsonValue != null) {
                const parsed = JSON.parse(jsonValue);
                return parsed;
            } else {
                return [];
            }

        } catch (e) {
            console.error("Erro ao ler os dados:", e);
            return [];
        }
    };

    useEffect(() => {

        const fetchData = async () => {
            const fetch = await getData();
            setTodoList(fetch);
        }

        fetchData();

    }, []);
    /*
        O array de dependencias vazio faz com que esse
        useEffect seja executado apenas 1 vez, na primeira vez
        que a tela for renderizada
    */

    const Item = ({ title }: ITask) => (
        <View>
            <Text style={theme.listItem}>{title}</Text>
        </View>
    );

    return (
        <SafeAreaView style={theme.container}>
            <TextInput
                style={theme.input}
                onChangeText={(value) => setInput(value)}
                value={input}
                onSubmitEditing={() => {
                    save(input);
                    setInput('');
                }}
            />

            <Text style={theme.label}>Lista de Tarefas:</Text>

            <FlatList
                data={todoList}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.title}
            />
        </SafeAreaView>
    )
}