import { useState } from 'react';
import { View, Text, TextInput, Switch, Button, Keyboard } from 'react-native';
import styles
 from './styles';
export default function AddJokes(props) {

    const [jokeDescription, setJokeDescription] = useState('');
    const [jokeDone, setJokeDone] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleAddPress = () => {
        if (jokeDescription) {
            props.onAddJoke(jokeDescription, jokeDone);

            setErrorMessage(null);
            setJokeDescription('');
            setJokeDone(false);
            Keyboard.dismiss();
            }
        else {
            setErrorMessage('The description is required.');
        }
    }

    const handleDescriptionChange = (value) => {
        setJokeDescription(value);
    }

    const handleStatusChange = (value) => {
        setJokeDone(value);
    }

    return (
        <View style = {styles.container}>

            {errorMessage && (
                <View style={styles.errorBoxStyle}>
                    <Text style={styles.attentionTextStyle}>Attention:</Text>
                    <Text style={styles.descStyle}>{errorMessage}</Text>
                </View>
            )}

            <TextInput style = {styles.input}
                placeholder='Enter a joke description'
                maxLength={150}
                onChangeText={handleDescriptionChange}
                defaultValue={jokeDescription}
            />

            <View >
                <Text style = {styles.textStyle}>Completed:</Text>
                <Switch style ={styles.switchStyle}
                     trackColor={{false: '#767577', true: 'black'}}
                     
                    value={jokeDone}
                    onValueChange={handleStatusChange}
            />


           <View style = {styles.buttonStyle}>
           <Button 
                color={"#ffffff"}
                title='Add'
                onPress={handleAddPress}
            />
           </View> 
            
           
                
            </View>
        </View>

        


    );
}