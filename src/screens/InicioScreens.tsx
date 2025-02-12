import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { User } from '../navigation/StackNavigation';

interface Props {
    users: User[];
}
interface LoginForm {
    email: string;
    password: string;
}

export const InicioScreens = ({ users }: Props) => {
    const navigation = useNavigation();

    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: '',
        password: ''
    });

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const handleChange = (name: string, value: string): void => {
        setLoginForm({ ...loginForm, [name]: value });
    }

    const verifyUser  = (): User | undefined => {
        
        const existUser  = users.find(user => user.email === loginForm.email && user.password === loginForm.password);
        return existUser ;
    }

    const handleLogin = (): void => {
    
        if (loginForm.email === '' || loginForm.password === '') {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        if (!verifyUser ()) {
            Alert.alert('Error', 'Usuario y/o contraseña incorrectos');
            return;
        }

        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../img/logo.jpg')} />
            <Text style={styles.title}>INICIO DE SESIÓN</Text>

            <Text style={styles.label}>Usuario</Text>
            <TextInput 
                style={styles.input}  
                onChangeText={(value) => handleChange('email', value)} 
                value={loginForm.email} 
                placeholder="Ingresa tu usuario"
            />
            <Text style={styles.label}>Contraseña</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput 
                    style={styles.input} 
                    onChangeText={(value) => handleChange('password', value)} 
                    value={loginForm.password} 
                    secureTextEntry={!passwordVisible} 
                    placeholder="Ingresa tu contraseña"
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Icon name={passwordVisible ? "visibility" : "visibility-off"} size={15} color="#4A2A04" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <Text style={styles.text1}>No tienes una cuenta? Regístrate aquí..!</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
}