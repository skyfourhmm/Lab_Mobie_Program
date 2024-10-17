import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios'

export default function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(null);



   const getData = async () => {
    try {
      const response = await axios.get('https://6710fc434eca2acdb5f31239.mockapi.io/api/v1/todo');
      setTodoList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addTask = async () => {
    if (task.length > 0) {
      if (isEditing !== null) {
        // Update task if editing
        await axios.put(`https://6710fc434eca2acdb5f31239.mockapi.io/api/v1/todo/${isEditing}`, 
        {job: task});
        
        getData();
        setIsEditing(null);
      } else {
        // Add new task
        // setTodoList([...todoList, { key: Math.random().toString(), task }]);
        await axios.post('https://6710fc434eca2acdb5f31239.mockapi.io/api/v1/todo', 
        {job: task, id: todoList.length +1});
        getData();
      }
      setTask(''); // Clear input
    }
  };

  const editTask = (item) => {
    setTask(item.job);
    setIsEditing(item.id);
  };

  const removeTask = async (key) => {
    setTodoList(todoList.filter((item) => item.id !== key));
    await axios.delete(`https://6710fc434eca2acdb5f31239.mockapi.io/api/v1/todo/${key}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity onPress={addTask}>
          <Icon name={isEditing ? "edit" : "add"} size={30} color="blue" />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.job}</Text>
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => editTask(item)}>
                <Icon name="edit" size={24} color="green" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeTask(item.id)}>
                <Icon name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
    marginRight: 10,
    paddingVertical: 5,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
    elevation: 1,
  },
  taskText: {
    fontSize: 16,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
});