import { StyleSheet, View, TextInput } from 'react-native'
import ButtonPrimary from './ButtonPrimary'

const AddTask = ({ taskTitle, onHandlerTitle, taskDescription, onHandlerDescription, addTask }) => {

    return (
        <View style={styles.container}>

            <TextInput
                value={taskTitle}
                placeholder='Ingresar título tarea'
                placeholderTextColor="white"
                maxLength={25}
                onChangeText={onHandlerTitle}
                style={styles.input}
            />

            <TextInput
                value={taskDescription}
                placeholder='Ingresar descripción tarea'
                placeholderTextColor="white"
                multiline
                numberOfLines={4}
                maxLength={100}
                onChangeText={onHandlerDescription}
                style={styles.input} />

            <ButtonPrimary 
                title={"Agregar tarea"}
                onPress={addTask}
            />

        </View>
    )
}

export default AddTask

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#872FF5",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 10
    },

    input: {
        width: "100%",
        borderWidth: 2,
        borderColor: "white",
        marginHorizontal: 10,
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: "white",
        fontSize: 16,
        borderRadius: 10,
        textAlignVertical: "top"
    },


})