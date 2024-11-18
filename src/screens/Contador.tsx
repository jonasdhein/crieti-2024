import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native"
import { colors } from "../themes/theme";

export const Contador = () => {

    const navigation = useNavigation<NavigationProps>(); //cria a variável que permite a navegação

    const [count, setCount] = useState<number>(0);

    return (
        <SafeAreaView style={styles.container}>
            <Text>{count}</Text>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text>INCREMENTAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Account");
                }}>
                <Text>NAVEGAR PARA OUTRA TELA</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    }
})