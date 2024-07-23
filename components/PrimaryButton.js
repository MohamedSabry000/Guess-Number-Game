import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton ( {children, onPress} ) {

    const onPressHandler = () => {
        onPress &&
        onPress() ;
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => [styles.buttonInnerContainer, pressed && styles.pressed]}
                onPress={onPressHandler} 
                android_ripple={{color: '#efbf81', borderless: false}} 
            >
                    <Text style={styles.buttonText}>{ children }</Text>
            </Pressable>
        </View>
    ) ;
}

export default PrimaryButton ;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#620F35',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: '#efbf81',
        fontSize: 16,
        textAlign: 'center',
    },
    // ios ripple effect
    pressed: {
        opacity: 0.75,
    }
})