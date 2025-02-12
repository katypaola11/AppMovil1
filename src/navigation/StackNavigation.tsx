import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';

import { InicioScreens } from '../screens/InicioScreens';
import { RegistroScreen } from '../screens/Registro';
import { Home } from '../screens/HomeScreen/Home';

//Definir interface estructura de mis objetos usuarios
export interface User {
    id: number;
    name: string;
    apellido: string;
    cedula: string;
    telefono: string;
    email: string;
    password: string;
}

//Definir arreglos con usuarios de prueba
const users: User[] = [
    { id: 1, name: 'kp', apellido: 'kp', cedula: 'kp', telefono: 'kp', email: 'kp', password: 'kp' },
    { id: 2, name: 'ln', apellido: 'ln', cedula: 'ln', telefono: 'ln', email: 'ln', password: 'ln' },
    { id: 3, name: 'dm', apellido: 'dm', cedula: 'dm', telefono: 'dm', email: 'dm', password: 'dm' }

]

const Stack = createStackNavigator();

export const StackNavigator = () => {

    //hook useState: permitir controlar el estado de los usuarios 
    const [usersManager, setUsersManager] = useState<User[]>(users);

    //Función para agregar usuarios al arreglo usersManager
    const addUsers = (user: User): void => {
        //Agregar nuevos usuarios al usersManager
        setUsersManager([...usersManager, user]);
    }

    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
               
            }
        }}>
            <Stack.Screen name="Login"
                options={{ headerShown: false }}
                children={() => <InicioScreens users={usersManager} />} />
            <Stack.Screen name="Register"
                options={{ headerShown: false }}
                children={() => <RegistroScreen users={usersManager} addUsers={addUsers} />} />
            <Stack.Screen name="Home"
                options={{ headerShown: false }}
                component={Home}/>
        </Stack.Navigator>
    );
}