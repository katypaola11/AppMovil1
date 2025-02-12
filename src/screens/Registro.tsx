import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from '../theme/appTheme';
import {  useNavigation } from '@react-navigation/native';
import { User } from '../navigation/StackNavigation';

interface Props {
    users: User[];
    addUsers: (user: User) => void;
}

interface RegisterForm {
    name: string;
    apellido: string;
    cedula: string; 
    telefono: string; 
    email: string;
    password: string;
}  

export const RegistroScreen = ({ users, addUsers }: Props) => {
    const navigation = useNavigation();

    const [registerForm, setRegisterForm] = useState<RegisterForm>({
        name: '',
        apellido: '',
        cedula: '',
        telefono: '',
        email: '',
        password: ''
    });

    const handleChange = (name: keyof RegisterForm, value: string) => {
        setRegisterForm(prevState => ({ ...prevState, [name]: value }));
    }

    const verifyUser  = (): User | undefined => {
        return users.find(user => user.email === registerForm.email);
    }

    const getIdNewUser  = (): number => {
        const getIdUser  = users.map(user => user.id);
        return getIdUser .length > 0 ? Math.max(...getIdUser ) + 1 : 1; // Asegúrate de que haya al menos un usuario
    }

    const handleRegister = () => {
        if (!registerForm.name || !registerForm.apellido || !registerForm.cedula || !registerForm.telefono || !registerForm.email || !registerForm.password) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        if (verifyUser ()) {
            Alert.alert('Error', 'El usuario ya existe');
            return;
        }

        const newUser : User = {
            id: getIdNewUser (),
            name: registerForm.name,
            apellido: registerForm.apellido,
            cedula: registerForm.cedula,
            telefono: registerForm.telefono,
            email: registerForm.email,
            password: registerForm.password
        }

        addUsers(newUser );
        Alert.alert('Registro', 'Usuario registrado con éxito');
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../img/logo.jpg')} />
            <Text style={styles.title}>REGISTRO</Text>

            <Text style={styles.label}>Nombre</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={(value) => handleChange('name', value)} 
                value={registerForm.name}
            />

            <Text style={styles.label}>Apellido</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={(value) => handleChange('apellido', value)} 
                value={registerForm.apellido}
            />

            <Text style={styles.label}>Cédula de Identidad</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={(value) => handleChange('cedula', value)} 
                value={registerForm.cedula} 
                keyboardType="numeric"
            />

            <Text style={styles.label}>Número de Teléfono</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={(value) => handleChange('telefono', value)} 
                value={registerForm.telefono} 
                keyboardType="phone-pad"
            />

            <Text style={styles.label}>Email</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={(value) => handleChange('email', value)} 
                value={registerForm.email} 
                keyboardType="email-address"
            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={(value) => handleChange('password', value)} 
                value={registerForm.password} // Agregado para mantener el valor de la contraseña
                secureTextEntry={true} 
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
};