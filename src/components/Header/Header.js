import { View, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLaugh } from '@fortawesome/free-solid-svg-icons';
import styles from './style';

export default function Header() {
    return (
        <View style = {styles.container} >
            
            <Text style={styles.textStyle2}>iFunny</Text>
            <FontAwesomeIcon icon={faLaugh} size={24}  color={"#FAD02C"} />
        </View>
    );
}