import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Páginas
import Splash from "./src/pages/Splash";
import Inicio from "./src/pages/Inicio";
import Home from "./src/pages/Home";
import Grupo from "./src/pages/Grupo";
import Milhar from "./src/pages/Milhar";
import Centena from "./src/pages/Centena";
import Dezena from "./src/pages/Dezena";
import DuqueDezena from "./src/pages/DuqueDezena";
import DuqueGrupo from "./src/pages/DuqueGrupo";
import TernoDezena from "./src/pages/TernoDezena";
import TernoGrupo from "./src/pages/TernoGrupo";

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Grupo" component={Grupo} options={{ headerShown: false }} />
        <Stack.Screen name="Milhar" component={Milhar} options={{ headerShown: false }} />
        <Stack.Screen name="Centena" component={Centena} options={{ headerShown: false }} />
        <Stack.Screen name="Dezena" component={Dezena} options={{ headerShown: false }} />
        <Stack.Screen name="DuqueDezena" component={DuqueDezena} options={{ headerShown: false }} />
        <Stack.Screen name="DuqueGrupo" component={DuqueGrupo} options={{ headerShown: false }} />
        <Stack.Screen name="TernoDezena" component={TernoDezena} options={{ headerShown: false }} />
        <Stack.Screen name="TernoGrupo" component={TernoGrupo} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
