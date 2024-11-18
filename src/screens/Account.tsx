import { useState } from "react"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native"
import { IUser } from "../@types/user"
import { theme } from "../themes/theme"

export const Account = () => {

    const [user, setUser] = useState<IUser>({
        name: 'Jonas',
        age: 35,
        city: 'Teutônia'
    } as IUser)

    return(
        <SafeAreaView style={theme.container}>
            <Text style={styles.title}>Meus Dados:</Text>
            <Text style={styles.subtitle}>Nome: {user.name}</Text>
            <Text style={styles.subtitle}>Idade: {user.age}</Text>
            <Text style={styles.subtitle}>Cidade: {user.city}</Text>
            <TouchableOpacity
                onPress={() => setUser({...user, age: user.age+1})}>
                <Text>Fazer Aniversário!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30
    },
    subtitle: {
        fontSize: 20
    }
})
