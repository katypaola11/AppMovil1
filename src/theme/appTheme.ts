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
    textRedirect: {
        color: '#4A2A04',
        marginTop: 20,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    containerCard:{
        flex:1,
        width:160,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: '#f7b843',
        padding: 20, 
        borderWidth: 1,
        shadowColor: 'black',
        borderStyle: 'solid',
        shadowOpacity: 0.25,
        shadowRadius: 2.65,
        elevation: 2,
        borderColor:'white',
        marginBottom:20,
        
    },
    imagenCard:{
        width: 80,
        height: 70,
    },
    containerIcon:{
        flex: 1,
        backgroundColor:'white',
        position:"absolute",
        alignSelf:"flex-end",
        //Manda el icono al la parte izquiera
        
    },
    containerModal:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalProduct:{
       backgroundColor: "white",
        margin: 25,
        borderRadius:10,
        shadowColor:"#000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation:5
    },
    headerModal:{
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth:1,
        borderStyle:"solid",
        padding: 35

    },
    titleHiderModal:{
        fontSize: 20,
        fontWeight:"black",
        color: 'black'
    },
    imageModal:{
        width:150,
        height:150,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
    },
    containerQuantiyy:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",

    },
    bottonQuantyty:{
        backgroundColor: '#4A2A04',
        height:40,
        width:40,
        borderRadius: 100,
        justifyContent: "center",
        alignItems:"center"
    },
    bottoQuantityText:{
        
        color: 'black',
        fontSize:20,
        fontWeight: "bold"
    },
    textQuantity:{
        backgroundColor:'#4A2A04',
        fontSize: 25,
        color: 'black'
    },
    bootonAddCard:{
        backgroundColor: '#4A2A04',
        borderRadius: 1,
        height:20,
        width: 120,
        justifyContent:"center",
        alignItems: "center",
        alignSelf:"center"
    },
    textBooton:{
        fontSize:10,
        color:"white",
        fontWeight:"bold"


    },
    IconFrom:{
        color: '#4A2A04',
        alignItems:"flex-start",
        justifyContent:"flex-start",
        alignSelf:"flex-start"
        }
});