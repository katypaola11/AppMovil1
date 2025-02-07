import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { styles } from '../theme/appTheme';

export const InicioScreens = () => {
    const navigation = useNavigation();

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
       
        if (!username || !password) {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
            return;
        }

        
        console.log('Usuario:', username);
        console.log('Contraseña:', password);

        const validUsers = [
            { username: 'kpantoja@gmail.com', password: '123456' },
            { username: 'lnuñez@gmiail.com', password: '1701' },
        ];

        const user = validUsers.find(user => user.username === username && user.password === password);

        if (user) {
            Alert.alert('Éxito', 'Usuario y contraseña correctos. Bienvenido.');
            // navigation.navigate('Home'); // para enviar a otra pantalla
        } else {
            console.log('Usuario o contraseña incorrectos.'); 
            Alert.alert('Error', 'Usuario o contraseña incorrectos.');
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../img/logo.jpg')} />
            <Text style={styles.title}>INICIO DE SESIÓN</Text>
            <Text style={styles.label}>Usuario</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={setUsername} 
                value={username} 
                placeholder="Ingresa tu usuario" 
            />
            <Text style={styles.label}>Contraseña</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={setPassword} 
                value={password} 
                secureTextEntry={true} 
                placeholder="Ingresa tu contraseña" 
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <Text style={styles.text1}>No tienes una cuenta? Regístrate aquí..!</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Registro' }))}
            >
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
}