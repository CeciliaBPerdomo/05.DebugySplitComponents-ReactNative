import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Modal } from 'react-native';
import uuid from 'react-native-uuid' //Generador de ids --> npm i react-native-uuid
import ModalDeleteTask from './src/components/ModalDeleteTask';
import AddTask from './src/components/AddTask';

export default function App() {

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskSelected, setTaskSelected] = useState({})

  const [tasks, setTasks] = useState([])

  const [modalVisible, setModalVisible] = useState(false)

  const addTask = () => {
    const newTask = {
      id: uuid.v4(),
      createAt: new Date().toLocaleString(),
      updateAt: new Date().toLocaleString(),
      title: taskTitle,
      description: taskDescription
    }

    setTasks([...tasks, newTask])

    setTaskTitle("")
    setTaskDescription("")
  }

  const onHandlerTitle = (t) => {
    setTaskTitle(t)
  }

  const onHandlerDescription = (t) => {
    setTaskDescription(t)
  }

  const handlerModal = (task) => {
    setTaskSelected(task)
    setModalVisible(!modalVisible)
  }

  const deleteTask = () => {
    console.log("Eliminado: " + taskSelected.id)
    setTasks(tasks.filter(task => task != taskSelected.id))
    setModalVisible(!modalVisible)
  }


  return (
    <View style={styles.container}>

      <AddTask
        taskTitle={taskTitle}
        onHandlerTitle={onHandlerTitle}
        taskDescription={taskDescription}
        onHandlerDescription={onHandlerDescription}
        addTask={addTask}
      />

      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          keyExtractor={tasks => tasks.id}
          renderItem={({ item }) => (
            <View style={styles.taskCard} key={item.id}>
              <Text style={styles.text}>
                {item.title}
              </Text>
              <Button title='DEL' onPress={() => handlerModal(item)} />
            </View>
          )}
        />

        <ModalDeleteTask
          modalVisible={modalVisible}
          taskSelected={taskSelected}
          deleteTask={deleteTask}
          handlerModal={handlerModal}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E4F6',
    paddingTop: 30
  },


  tasksContainer: {
    gap: 25,
    padding: 10
  },

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

});