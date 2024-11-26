import { Alert, FlatList, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { colors, theme } from "../themes/theme";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ITask } from "../@types";
import { Icon } from "../components/Icon";

export const ToDoList = () => {

    const [input, setInput] = useState<string>('');
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const save = (text: string) => {

        const newList = [...todoList,
        {
            id: todoList.length + 1,
            checked: false,
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

    const removeItem = (id: number) => {
        try {
            Alert.alert('Remover Item', 'Tem certeza disso?', [
                {
                    text: 'Cancelar',
                    onPress: () => {
                        console.log('Operação cancelada');
                    }
                },
                {
                    text: 'Sim',
                    onPress: () => {

                        const newList = todoList.filter(item => item.id != id);

                        setTodoList(newList);
                        storeData(newList);
                    }
                }
            ])
        } catch (err) {
            console.log("🚀 ~ removeItem ~ err:", err)
        }
    }

    const updateItem = (id: number) => {
        try {

            const newList = todoList.map(item =>
                (item.id === id) ? {
                    ...item,
                    checked: !item.checked
                } :
                    { ...item }
            )

            setTodoList(newList);
            storeData(newList);

        } catch (err) {
            console.log("🚀 ~ updateItem ~ err:", err)
        }
    }

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

    const Item = ({ id, checked, title }: ITask) => (
        <View style={styles.item}>
            <View style={styles.itemTitle}>
                <TouchableOpacity
                    style={styles.checked}
                    onPress={() => updateItem(id)}>
                    <Icon name={checked ? 'check-square' : 'square'} size={22} />
                </TouchableOpacity>
                <Text style={checked ? styles.titleChecked : styles.title}>{title}</Text>
            </View>
            <TouchableOpacity
                onPress={() => removeItem(id)}>
                <Icon name='trash' size={18} color={colors.red} />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={theme.container}>
            <TextInput
                style={theme.input}
                onChangeText={(value) => setInput(value)}
                placeholder="Digite o nome da tarefa"
                value={input}
                onSubmitEditing={() => {
                    save(input);
                    setInput('');
                }}
            />

            <Text style={theme.label}>Lista de Tarefas:</Text>

            <FlatList
                data={todoList}
                renderItem={({ item }) =>
                    <Item id={item.id} checked={item.checked} title={item.title} />
                }
                keyExtractor={item => item.id.toString()}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderColor: colors.placeHolder
    },
    itemTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checked: {
        paddingRight: 8
    },
    title: {
        fontSize: 18,
        color: colors.black,
    },
    titleChecked: {
        fontSize: 18,
        opacity: 0.4,
        textDecorationLine: 'line-through',
    }
});