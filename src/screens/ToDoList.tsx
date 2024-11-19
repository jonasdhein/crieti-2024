import { SafeAreaView, Text, TextInput } from "react-native"
import { theme } from "../themes/theme";
import { useEffect, useState } from "react";

export const ToDoList = () => {

    const [input, setInput] = useState<string>('');
    const [todoList, setTodoList] = useState<string[]>([]);

    const save = (text: string) => {
        
        const newList = [...todoList, text];

        setTodoList(newList);
    }

    useEffect(() => {
        console.log('INPUT', input)
    }, [input])

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
            
            {
                todoList.map((tarefa, index) => (
                    <Text
                        style={theme.listItem}
                        key={index}>{tarefa}</Text>
                ))
            }
        </SafeAreaView>
    )
}