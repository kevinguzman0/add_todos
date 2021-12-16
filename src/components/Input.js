import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#fff",
        height: 40,
        alignSelf: 'stretch',
        padding: 10,
        borderRadius: 5,
        fontSize: 15,
        fontWeight: '500'
    }
})

const Input = ({ onChange, value, onSubmit}) => {
    return (
        <TextInput
            placeholder='Description'
            onChangeText={onChange}
            value={value}
            style={styles.input}
            onSubmitEditing={onSubmit}
        />
    )
}
export default Input
