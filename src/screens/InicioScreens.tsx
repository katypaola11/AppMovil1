import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';

interface Props extends StackScreenProps<any, any> {};

export const InicioScreens = ({ navigation }: Props) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        if (!username || !password) {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
            return;
        }

        const validUsers = [
            { username: 'usuario1', password: 'contraseña1' },
            { username: 'usuario2', password: 'contraseña2' },
        ];

        const user = validUsers.find(user => user.username === username && user.password === password);

        if (user) {
            Alert.alert('Éxito', 'Inicio de sesión exitoso.');
        } else {
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
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registro')}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f7b843',
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 20,
        width: 300,
        height: 300
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#4A2A04',
    },
    label: {
        fontSize: 16,
        marginVertical: 8,
        color: '#004d40',
    },
    input: {
        height: 50,
        borderColor: '#4A2A04',
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 12,
        backgroundColor: '#ffffff',
    },
    button: {
        backgroundColor: '#4A2A04',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});