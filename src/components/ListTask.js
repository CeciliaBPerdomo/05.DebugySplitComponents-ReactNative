import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import CardTaskList from './CardTaskList'

const ListTask = ({ tasks, handlerModal, screenWidth, updateTaskCompleted }) => {
    return (
        <View style={styles.tasksContainer}>
            <FlatList
                horizontal={true}
                pagingEnabled={true}

                data={tasks}
                keyExtractor={tasks => tasks.id}
                renderItem={({ item }) => (
                    
                    <CardTaskList
                        item={item}
                        handlerModal={handlerModal}
                        screenWidth={screenWidth}
                        updateTaskCompleted={updateTaskCompleted}
                    />

                )}
            />
        </View>
    )
}

export default ListTask

const styles = StyleSheet.create({
    tasksContainer: {
        gap: 25,
        padding: 10
    }
})