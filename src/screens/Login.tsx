import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from '../themes/theme';
import { Icon } from '../components/Icon';
import { useState } from 'react';
import { ILogin } from '../@types';
import axios from 'axios';
import { ILoginRet } from '../@types/loginRet';

axios.defaults.baseURL = 'https://dummyjson.com';

export const Login = () => {

    const [login, setLogin] = useState<ILogin>({
        username: '',
        password: ''
    });

    const doLogin = async () => {
        //validar os campos
        if (login.username.length <= 0) {
            Alert.alert('Atenção', 'Informe o nome de usuário');
            return;
        }
        if (login.password.length <= 0) {
            Alert.alert('Atenção', 'Informe a senha');
            return;
        }

        //realizar o login
        const { data } = await axios
        .post('/auth/login', login)
        .catch(err => {
            Alert.alert('Ops', 'Credenciais inválidas');
        });
       
        console.log("🚀 ~ doLogin ~ USER:", data.id);

        //validar o retorno

        // navigation.navigate('Home'); // Implementar a navegação para a tela principal
    }

    return (
        <View style={[theme.container, theme.center]}>

            <Icon name='lock' />

            <Text style={theme.label}>Faça o login</Text>

            <TextInput
                style={[theme.input, theme.marginBottom]}
                placeholder='Nome de Usuário'
                value={login.username}
                onChangeText={value => setLogin({ ...login, username: value })}
            />

            <TextInput
                style={[theme.input, theme.marginBottom]}
                placeholder='Senha'
                value={login.password}
                onChangeText={value => setLogin({ ...login, password: value })}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={theme.button}
                onPress={() => doLogin()}>
                <Text style={theme.textButton}>LOGIN</Text>
            </TouchableOpacity>

        </View>
    );
}
