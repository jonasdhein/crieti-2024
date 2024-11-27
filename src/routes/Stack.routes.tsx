import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Contador } from "../screens/Contador";
import { Account } from "../screens/Account";
import { ToDoList } from "../screens/ToDoList";
import { Login } from "../screens/Login";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="Contador" component={Contador} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
  );
}
