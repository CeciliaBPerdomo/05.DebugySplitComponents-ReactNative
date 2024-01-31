import { StyleSheet, Button, View, TextInput } from 'react-native'

const AddTask = ({ taskTitle, onHandlerTitle, taskDescription, onHandlerDescription, addTask }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput value={taskTitle} placeholder='Ingresar titulo tarea' onChangeText={onHandlerTitle} style={styles.input} />
            <TextInput value={taskDescription} placeholder='Ingresar descripcion tarea' onChangeText={onHandlerDescription} style={styles.input} />
            <Button color="#3921F5" title='Agregar tarea' onPress={addTask} />
        </View>
    )
}

export default AddTask

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#872FF5",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        paddingBottom: 15
    },

    input: {
        width: 250,
        borderBottomWidth: 2,
        borderColor: "white",
        margin: 10,
        paddingVertical: 5,
        paddingHorizontal: 10
    },


})