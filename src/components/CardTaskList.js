import { StyleSheet, Text, View, Button, Switch } from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const CardTaskList = ({ item, handlerModal, screenWidth, updateTaskCompleted }) => {
    return (
        <View
            style={[styles.taskCard, { width: screenWidth - 40 }]}
            key={item.id}>

            <Text style={styles.text}>
                Creación: {item.createAt}
            </Text>

            <Text style={styles.text}>
                Título: {item.title}
            </Text>

            <Text style={styles.text}>
                Descripción: {item.description}
            </Text>

            <Text style={styles.text}>
                Actualización: {item.updateAt}
            </Text>

            <View style={styles.completedContainer}>
                <Switch
                    value={item.completed}
                    onValueChange={() => updateTaskCompleted(item.id)}
                />

                <Text style={styles.completedText}>
                    {item.completed ? "Tarea pendiente" : "Tarea completada"}
                </Text>
            </View>

            <ButtonPrimary
                title='Borrar tarea'
                onPress={() => handlerModal(item)}
            />

        </View>
    )
}

export default CardTaskList

const styles = StyleSheet.create({
    taskCard: {
        backgroundColor: "#872FF5",
        padding: 20,
        marginHorizontal: 10,
        alignItems: "flex-start",
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        gap: 25
    },

    text: {
        width: "100%",
        color: "white",
        fontSize: 18,
    },

    completedContainer: {
        flexDirection: "row"
    }, 

    completedText: {
        fontSize: 16,
        color: "white",
        marginTop: 13,
        paddingLeft: 7,
    }
})