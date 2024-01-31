import { useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

import uuid from 'react-native-uuid' //Generador de ids --> npm i react-native-uuid

import ModalDeleteTask from './src/components/ModalDeleteTask';
import AddTask from './src/components/AddTask';
import ListTask from './src/components/ListTask';

export default function App() {

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskSelected, setTaskSelected] = useState({})

  const [tasks, setTasks] = useState([])

  const [modalVisible, setModalVisible] = useState(false)

  // Ancho del dispositivo
  const screenWidth = Dimensions.get('window').width

  const addTask = () => {
    const newTask = {
      id: uuid.v4(),
      createAt: new Date().toLocaleString(),
      updateAt: new Date().toLocaleString(),
      title: taskTitle,
      description: taskDescription,
      completed: false
    }

    setTasks([...tasks, newTask])

    setTaskTitle("")
    setTaskDescription("")
  }


  // Actualizacion de la tarea pendiente o no
  const updateTaskCompleted = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, ...{ completed: !task.completed } }
      }
      return task
    }))
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
    setTasks(tasks.filter(task => task.id != taskSelected.id))
    setModalVisible(!modalVisible)
  }


  return (
    <View style={styles.container}>

      <Text style={styles.encabezado}>
        Lista de tareas
      </Text>

      <AddTask
        taskTitle={taskTitle}
        onHandlerTitle={onHandlerTitle}
        taskDescription={taskDescription}
        onHandlerDescription={onHandlerDescription}
        addTask={addTask}
      />

      <ListTask
        tasks={tasks}
        handlerModal={handlerModal}
        screenWidth={screenWidth}
        updateTaskCompleted={updateTaskCompleted}
      />

      <ModalDeleteTask
        modalVisible={modalVisible}
        taskSelected={taskSelected}
        deleteTask={deleteTask}
        handlerModal={handlerModal}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E4F6',
    paddingTop: 30
  },

  encabezado: {
    fontSize: 24,
    justifyContent: "center", 
    alignItems: "center",
    padding: 10, 
    color: "#872FF5"
  }
});