import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export const InicioScreens = () => {
    const navigation = useNavigation();

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordVisible, setPasswordVisible] = React.useState(false); // Estado para la visibilidad de la contraseña

    const handleLogin = () => {

        if (!username || !password) {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
            return;
        }

        console.log('Usuario:', username);
        console.log('Contraseña:', password);

   
        const validUsers = [
            { username: 'kpantoja@gmail.com', password: '123456' },
            { username: 'lnuñez@gmail.com', password: '1701' },
            { username: 'DMera@gmail.com', password: '0123' },
            { username: 'universal', password: 'universal' },
        ];


        const user = validUsers.find(user => user.username === username && user.password === password);

        if (user) {
            Alert.alert('Éxito', 'Usuario y contraseña correctos. Bienvenido.');
            //navigation.navigate('Home'); 
            console.log('Usuario y contraseña correctos. Bienvenido.');
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

            <TextInput  style={styles.input}  onChangeText={setUsername} value={username} placeholder="Ingresa tu usuario"/>
            <Text style={styles.label}>Contraseña</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput style={styles.input} onChangeText={setPassword} value={password} secureTextEntry={!passwordVisible} placeholder="Ingresa tu contraseña"/>
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                <Icon  name={passwordVisible ? "visibility" : "visibility-off"} size={15} color="#4A2A04" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <Text style={styles.text1}>No tienes una cuenta? Regístrate aquí..!</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Registro' }))}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
}