import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
    alignSelf: 'stretch',
    backgroundColor: '#bcbcbc',
    padding: 25,
    shadowOffset: { height: 3, width: 3 }, 
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 5
    },
 
    input: {
        height: 40,
        marginBottom: 20,
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: '#bcbcbc',
        borderWidth: 1,
       
    },

    textStyle:{
        
        fontSize: 15,
        fontWeight: 'bold',
        
    },

    switchStyle:{
        marginTop: 10
    },

    buttonStyle:{
        marginTop: 20,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'black'
    },


    errorBoxStyle:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: 'red',
        borderLeftWidth: 6,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth:1,
        padding:10,
        marginBottom: 20,
    },

    attentionTextStyle:{
        color: 'red',
        fontWeight:'bold',
    },

    descStyle:{
        color: 'red',
    },



    

});
export default styles;