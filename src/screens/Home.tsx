import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../components/Icon';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../@types/navigation';
import { theme } from '../themes/theme';

export const Home = () => {

  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={[theme.container, theme.center]}>

      <View style={styles.margins}>
        <Icon name='home' size={80} />
      </View>

      <View style={styles.buttons}>

        <TouchableOpacity
          style={[theme.button, theme.marginBottom]}
          onPress={() => navigation.navigate('Account')}>
          <Text style={theme.textButton}>MEUS DADOS</Text>
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

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttons: {
    width: '100%',
    paddingHorizontal: 40
  },
  margins: {
    marginVertical: 40
  }
})