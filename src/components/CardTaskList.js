import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CardTaskList = ({item, handlerModal}) => {
    return (
        <View style={styles.taskCard} key={item.id}>
            <Text style={styles.text}>
                {item.title}
            </Text>
            <Button title='Borrar' onPress={() => handlerModal(item)} />
        </View>
    )
}

export default CardTaskList

const styles = StyleSheet.create({
    taskCard: {
        flexDirection: "row",
        backgroundColor: "#872FF5",
        padding: 20,
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 10
      },
    
      text: {
        width: "70%",
        color: "white",
        fontSize: 16,
      },
})