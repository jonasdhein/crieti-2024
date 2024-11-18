import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../components/Icon';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../@types/navigation';
import { theme } from '../themes/theme';

export const Home = () => {

  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={theme.container}>
      <Icon name='home' />

      <TouchableOpacity
        style={[theme.button, theme.marginBottom]}
        onPress={() => navigation.navigate('Account')}>
        <Text style={theme.textButton}>ACCOUNT</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[theme.button, theme.marginBottom]}>
        <Text style={theme.textButton}>CONTADOR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ToDoList')}
        style={theme.button}>
        <Text style={theme.textButton}>LISTA DE TAREFAS</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}