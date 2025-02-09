import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f7b843',
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 20,
        width:150,
        height: 150,
        borderRadius: 100
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#4A2A04',
    },
    label: {
        fontSize: 16,
        marginVertical: 5,
        alignSelf: 'flex-start',
        color: '#004d40',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#4A2A04',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 5,
        marginBottom: 1,
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
    text1: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center'
    },
});