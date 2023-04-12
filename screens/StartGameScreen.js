import { TextInput, View, StyleSheet } from 'react-native' ;
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen () {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                autoCapitalize='none'
                autoCorrect={false}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    ) ;
}

export default StartGameScreen ;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        padding: 16,
        backgroundColor: '#72063c',
        marginHorizontal: 24,
        borderRadius: 8,
        // shadow only works on ِAndroid
        elevation: 8,
        // shadow only works on iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,    
    },
    numberInput: {
        width: 50,
        height: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})