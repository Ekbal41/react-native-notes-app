import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default Welcome = () => {
    return (
        <View >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#22c55e',
                    textTransform: 'uppercase',

                }}
            >Welcome Asif!</Text>
            <Text>
                You can write your notes here.
            </Text>

        </View>
    );
}