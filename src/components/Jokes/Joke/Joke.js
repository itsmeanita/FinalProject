import { useState } from 'react';
import { View, Text, Modal, Switch, Alert } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './styles';


export default function Joke(props) {

    const [showModal, setShowModal] = useState(false);
    const handleModalToggle = () => {
        setShowModal(!showModal);
    }

    const handleStatusChangePress = () => {
        props.onStatusChange(props.joke.id);
    }



        const handleRemovePress = () => {
            Alert.alert(
            'Remove Joke',
            'This action will permanently delete this Joke. This action cannot be undone!', [
            {
            text: 'Confirm',
            onPress: () => {
            props.onJokeRemoval(props.joke.id);
            setShowModal(false);
            }
            },
            {
            text: 'Cancel'
            }
            ]);
            }
   
    return (
        
       <>
       <Pressable onPress = {handleModalToggle}>
        <View style ={styles.container}>
            <Text style={styles.descriptionStyle}>{props.joke.description}</Text>
            <Text>Id: {props.joke.id}</Text>
            <View style ={styles.statusStyle}>
                <Text>Likes: </Text>
                <Text style={{color:props.joke.done ? 'green' : 'red', fontWeight: 'bold'}}>{props.joke.done ? 'Completed' : 'Open'}</Text>
            </View>  
        </View>
        </Pressable>

        <Modal visible={showModal}>
            <View style ={styles.modalContainer}>
                <Text style = {styles.modal}>{props.joke.description}</Text>
                <Switch 
                trackColor={{false: '#767577', true: 'black'}}
                value={props.joke.done}
                onValueChange={handleStatusChangePress}
                />
                <Text style = {styles.toggle}>Toggle Status</Text>

                <View style = {styles.buttonContainer}>
                <Pressable onPress={handleModalToggle}
                    style = {styles.button}
                >
                    <Text style = {styles.buttonText}>Close</Text>
                </Pressable>
                

                <Pressable onPress={handleRemovePress}
                    style = {styles.buttonRemove}
                    
                >
                    <Text style = {styles.buttonText}>Remove</Text>
                </Pressable>
                </View>
            </View>
        </Modal>

        
       </>

        
        

    );
}