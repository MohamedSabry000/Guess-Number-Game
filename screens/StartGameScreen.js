import { TextInput, View, StyleSheet, Alert } from 'react-native' ;
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Colors from '../utils/colors';

function StartGameScreen ({ onStartGame }) {
    const [enteredValue, setEnteredValue] = useState('') ;

    const resetInputHandler = () => {
        setEnteredValue('') ;
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue) ;
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 
                'Number has to be a number between 1 and 99.', 
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return ;
        }
        onStartGame(chosenNumber) ;
    }

    return (
        <View style={styles.outerContainer}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType="number-pad"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={enteredValue}
                    onChangeText={(text) => setEnteredValue(text)}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    ) ;
}

export default StartGameScreen ;

const styles = StyleSheet.create({
    outerContainer: {
        padding: 10,
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 8,
        // backgroundColor: 'white',
        marginTop: 100,
        marginHorizontal: 24,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: Colors.primary500,
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
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
    },
    buttonContainer: {
        flex: 1,
    },
})