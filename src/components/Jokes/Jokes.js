import { View,  ScrollView } from 'react-native';
import Joke from './Joke/Joke';
import styles from './styles';

export default function Jokes(props) {
    return (
        <View style={styles.container}>
            <ScrollView>
            {props.jokes.map(
                (joke, index) => {
                    console.log(joke)
                    return(
                  
                    <Joke key={index} joke={joke} 
                    onStatusChange={props.onStatusChange}
                    onJokeRemoval={props.onJokeRemoval}/>
                 
                )}
            )}
            </ScrollView>
     
        </View>
    );
}