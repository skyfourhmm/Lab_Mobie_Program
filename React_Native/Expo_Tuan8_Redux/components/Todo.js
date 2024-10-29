import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo, editTodo } from "./todoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (!isEditing) {
      dispatch(addTodo(text));
      setText("");
    } else {
      dispatch(editTodo({isEditing, text}));
      setIsEditing(null)
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id) => {
    dispatch(editTodo(id));
  }

  const changeValueBeforeEdit = (id) => {
    const value = todos.find(todo => todo.id === id)
    setText(value.text)
    setIsEditing(value.id)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task..."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <Icon name={isEditing ? "edit" : "add"} size={30} color="blue" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        renderItem={({ item  }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item?.text}</Text>
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => changeValueBeforeEdit(item.id)}>
                <Icon name="edit" size={24} color="green" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
                <Icon name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

    

    </View>
  );
};

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

export default Todo;