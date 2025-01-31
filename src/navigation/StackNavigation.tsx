import { createStackNavigator } from '@react-navigation/stack';
import { InicioScreens } from '../screens/InicioScreens';
import { RegistroScreen } from '../screens/Registro';


const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={InicioScreens} />
            <Stack.Screen name="Registro" component={RegistroScreen} />
        
        </Stack.Navigator>
    );
}