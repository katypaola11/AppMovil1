import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface Usuario {
    nombre: string;
    apellido: string;
    cedula: string;
    telefono: string;
    email: string;
    contraseña: string;
}


const usuariosExistentes = [
    { email: 'kpantoja@gmail.com', cedula: '1751381722' },
    { email: 'lnuñez@example.com', cedula: '1713404968' },
    { email: 'DMera@example.com', cedula: '1713448877' },
];

export const RegistroScreen = () => {
    const navigation = useNavigation();
    
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [cedula, setCedula] = React.useState('');
    const [telefono, setTelefono] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [contraseña, setContraseña] = React.useState('');


    const verificarUsuarioExistente = () => {
        return usuariosExistentes.some(usuario => usuario.email === email || usuario.cedula === cedula);
    };

    const handleRegistro = () => {

        if (!nombre || !apellido || !cedula || !telefono || !email || !contraseña) {
            Alert.alert('Campos Vacíos', 'Por favor, completa todos los campos.');
            return; 
        }

        if (verificarUsuarioExistente()) {
            Alert.alert('Usuario Existente', 'El usuario ya existe con este email o cédula.');
            return; 
        }

        const nuevoUsuario: Usuario = { nombre, apellido, cedula, telefono, email, contraseña };
        console.log('Usuario registrado:', nuevoUsuario); 
        Alert.alert('Registro Exitoso', 'El usuario ha sido registrado correctamente.'); 
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../img/logo.jpg')} />
            <Text style={styles.title}>REGISTRO</Text>

            <Text style={styles.label}>Nombre</Text>
            <TextInput style={styles.input} onChangeText={setNombre} value={nombre}/>

            <Text style={styles.label}>Apellido</Text>
            <TextInput style={styles.input} onChangeText={setApellido} value={apellido}/>

            <Text style={styles.label}>Cédula de Identidad</Text>
            <TextInput style={styles.input} onChangeText={setCedula} value={cedula} keyboardType="numeric"/>

            <Text style={styles.label}>Número de Teléfono</Text>
            <TextInput style={styles.input} onChangeText={setTelefono} value={telefono} keyboardType="phone-pad"/>

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} keyboardType="email-address"/>

            <Text style={styles.label}>Contraseña</Text>
            <TextInput style={styles.input} onChangeText={setContraseña} secureTextEntry={true} />

            <TouchableOpacity style={styles.button} onPress={handleRegistro}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
};