import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface Props extends StackScreenProps<any, any> {};

export const RegistroScreen = ({ navigation }: Props) => {
    const [nombre, onChangeNombre] = React.useState('');
    const [apellido, onChangeApellido] = React.useState('');
    const [cedula, onChangeCedula] = React.useState('');
    const [telefono, onChangeTelefono] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [direccion, onChangeDireccion] = React.useState('');

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../img/logo.jpg')} /> 

            <Text style={styles.title}>REGISTRO</Text>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNombre}
                value={nombre}
            />
            <Text style={styles.label}>Apellido</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeApellido}
                value={apellido}
            />
            <Text style={styles.label}>Cédula de Identidad</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeCedula}
                value={cedula}
                keyboardType="numeric"
            />
            <Text style={styles.label}>Número de Teléfono</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeTelefono}
                value={telefono}
                keyboardType="phone-pad"
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                keyboardType="email-address"
            />
            <Text style={styles.label}>Dirección</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeDireccion}
                value={direccion}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InicioScreens')}>
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
        width: 150,
        height: 150
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#4A2A04'
    },
    label: {
        fontSize: 16,
        marginVertical: 8,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 12,
        backgroundColor: '#ffffff',
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#4A2A04',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});