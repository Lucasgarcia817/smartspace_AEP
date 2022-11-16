import Cadastro from './Screens/Cadastro';
import Home from './Screens/Home';
import Visualizacao from './Screens/Visualizacao';
import Login from './Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={options}/>
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Visualizacao" component={Visualizacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
