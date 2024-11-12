import { StatusBar } from 'expo-status-bar';
import { Contador } from './src/components/Contador';
import { Account } from './src/components/Account';

export default function App() {
  return (
    <>
      <Account/>
      <StatusBar style="dark" />
    </>
  );
}

