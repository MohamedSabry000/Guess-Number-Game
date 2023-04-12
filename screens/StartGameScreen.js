import { TextInput, View, StyleSheet } from 'react-native' ;
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen () {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Enter a Number" />
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
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
})