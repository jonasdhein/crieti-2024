import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Icon } from '../components/Icon';
import { useNavigation } from '@react-navigation/native';

export function Home() {

    const navigation = useNavigation();
    
  return (
    <SafeAreaView>
        <Icon name='home' />

        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Text>ACCOUNT</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>CONTADOR</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}