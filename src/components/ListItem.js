import React from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        height: 55,
        justifyContent: 'center',
        backgroundColor: 'rgba(2, 115, 183, 0.1)',
        borderBottomColor: '#0273B7',
        borderBottomWidth: 4
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
    },
})

export default ({ desc, onPress, completed }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            {completed ?
                <>
                    <Ionicons name="md-checkmark-circle" size={18}>
                        <Text style={styles.text}>{desc}</Text>
                    </Ionicons>
                </>
                :
                <Text style={styles.text}>{desc}</Text>
            }
        </TouchableOpacity>
    )
}