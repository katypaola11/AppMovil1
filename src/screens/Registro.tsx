import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

const usuariosExistentes = [
    { email: 'kpantoja@gmail.com' },
    { email: 'lnuñez@example.com' },
];

export const RegistroScreen = () => {
    const navigation = useNavigation();
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [cedula, setCedula] = React.useState('');
    const [telefono, setTelefono] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [direccion, setContraseña] = React.useState('');

    const verificarUsuarioExistente = () => {
        return usuariosExistentes.some(usuario => usuario.email === email);
    };

    const handleRegistro = () => {
     
        if (!nombre || !apellido || !cedula || !telefono || !email || !direccion) {
            Alert.alert('Campos Vacíos', 'Por favor, completa todos los campos.');
            return; 
        }

        if (verificarUsuarioExistente()) {
            console.log('El usuario ya existe:', email);
            return; 
        }

        console.log('Usuario registrado:', { nombre, apellido, cedula, telefono, email, direccion });
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../img/logo.jpg')} />

            <Text style={styles.title}>REGISTRO</Text>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNombre}
                keyboardType='default'
                value={nombre}
            />
            <Text style={styles.label}>Apellido</Text>
            <TextInput
                style={styles.input}
                onChangeText={setApellido}
                keyboardType='default'
                value={apellido}
            />
            <Text style={styles.label}>Cédula de Identidad</Text>
            <TextInput
                style={styles.input}
                onChangeText={setCedula}
                value={cedula}
                keyboardType="numeric"
            />
            <Text style={styles.label}>Número de Teléfono</Text>
            <TextInput
                style={styles.input}
                onChangeText={setTelefono}
                value={telefono}
                keyboardType="phone-pad"
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
            />
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
                style={styles.input}
                onChangeText={setContraseña} 
            />
            
            <TouchableOpacity style={styles.button} onPress={handleRegistro}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
};