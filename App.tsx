import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes/Stack.routes';

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

