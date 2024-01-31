import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import CardTaskList from './CardTaskList'

const ListTask = ({ tasks, handlerModal }) => {
    return (
        <View style={styles.tasksContainer}>
            <FlatList
                data={tasks}
                keyExtractor={tasks => tasks.id}
                renderItem={({ item }) => (
                    
                    <CardTaskList
                        item={item}
                        handlerModal={handlerModal}
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