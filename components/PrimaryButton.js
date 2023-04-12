import { View, Text } from 'react-native';

function PrimaryButton ( props ) {
    return (
        <View onPress={ props.onPress }>
            <Text>{ props.children }</Text>
        </View>
    ) ;
}

export default PrimaryButton ;