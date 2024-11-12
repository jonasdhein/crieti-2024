import { useState } from "react"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native"
import { IUser } from "../@types/user"

export const Account = () => {

    const [user, setUser] = useState<IUser>({
        name: 'Jonas',
        age: 35,
        city: 'Teutônia'
    } as IUser)

    return(
        <SafeAreaView style={styles.container}>
            <Text>Meus Dados:</Text>
            <Text>Nome: {user.name}</Text>
            <Text>Idade: {user.age}</Text>
            <Text>Cidade: {user.city}</Text>
            <TouchableOpacity
                onPress={() => setUser({...user, age: user.age+1})}>
                <Text>Fazer Aniversário!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
