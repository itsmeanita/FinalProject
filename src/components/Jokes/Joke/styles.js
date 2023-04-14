import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bcbcbc'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        display:'flex'
    },

    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 100,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#bcbcbc'
        },
    modal: {
        fontWeight: 'bold',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center', 
        height: 50, 
        backgroundcolor: 'fefefe',
      },

      toggle: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center', 
        height: 50, 
        backgroundcolor: 'fefefe',
      },


      button: {
      
        flexDirection: 'row',
        borderRadius: 6,
        backgroundColor: '#990f02'
      },

      buttonRemove: {
        marginLeft: 10,
        flexDirection: 'row',
        borderRadius: 6,
        backgroundColor: '#990f02'
      },

      buttonText: {
        padding: 10,
        fontSize: 20,
        color: 'white',
      },



    descriptionStyle:{
        fontSize: 15,
        fontWeight:'bold'
    },

    statusStyle:{
        flexDirection: 'row'
    }

});
export default styles;