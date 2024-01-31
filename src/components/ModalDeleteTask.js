import { StyleSheet, Text, View, Modal, Button } from 'react-native'

const ModalDeleteTask = ({taskSelected, deleteTask, modalVisible, handlerModal} ) => {

    //const {taskSelected, deleteTask, modalVisible, handlerModal} = props
     
    return (
        <Modal visible={modalVisible} 
        animationType='fade'
        onRequestClose={() => handlerModal({})} //cuando se cierra con la flecha de atras del celu
        >
            <View>
                <Text>Estas seguro que quieres borrar la tarea: {taskSelected.title}</Text>
                <Button title='Si' onPress={deleteTask} />
                <Button title='No' onPress={() => { handlerModal({}) }} />
            </View>
        </Modal>
    )
}

export default ModalDeleteTask

const styles = StyleSheet.create({})