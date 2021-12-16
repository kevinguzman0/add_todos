import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native"
import { connect } from 'react-redux'

import ListItem from './components/ListItem'
import Input from './components/Input'
import { complete, saveTodo } from './reducers/todos'


const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        flex: 1,
        backgroundColor: '#0273B7',
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
        paddingTop: 30,
    },
    text: {
        fontSize: 28,
        color: '#fff',
        fontWeight: '800',
        marginBottom: 10
    },
    list: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        marginTop: 15,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
});

const App = ({ todos, complete, submit }) => {
    const [value, setValue] = useState('')

    const handleChange = (val) => {
        setValue(val)
    }

    const handleSubmit = () => {
        submit(value)
        setValue('')
    }

    return (
        <View style={styles.container}>
            <View style={{alignItems:'center', justifyContent: 'center'}}>
                <Text style={styles.text}>ADD TODOS</Text>
            </View>
            <Input
                onChange={handleChange}
                value={value}
                onSubmit={handleSubmit}
            />
            <FlatList
                style={styles.list}
                data={todos}
                keyExtractor={x => String(x.id)}
                renderItem={({ item }) =>
                    <ListItem
                        completed={item.completed}
                        onPress={() => complete(item.id)}
                        desc={item.desc}
                    />
                }
            />
        </View>
    )
}

const mapStateToProps = state => {
    return state
}
const mapDispatchToProps = dispatch => ({
    complete: (id) => dispatch(complete(id)),
    submit: (val) => dispatch(saveTodo(val)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)