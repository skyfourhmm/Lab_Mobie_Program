import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addCard, removeCard, updateCard } from './cardSlice';

export default function Detail({navigation,  route  }) {
  const { id } = route.params || {}; 
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://6710fc434eca2acdb5f31239.mockapi.io/api/v1/todo/${id}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };
  


  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <View
        style={{
          backgroundColor: 'pink',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          borderRadius: 20,
          marginTop: 20,
          height: '50%',
        }}>
        <Image
          source={require('../assets/s21.png')} 
          style={{ width: '80%', height: '80%', marginBottom: 5 }}
        />
      </View>

      <Text style={{ fontSize: 20, fontWeight: 600 }}>{data.name}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: '#333',
            opacity: 0.7,
          }}>
          15% | OFF $350
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 600, marginLeft: 60 }}>
          {data.price}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 600, marginTop: 20 }}>
          Description
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: '#333',
            opacity: 0.7,
          }}>
          It’s a very important form of writing because it allows individuals to
          communicate complex ideas, share knowledge, and preserve information
          for future generations.writing
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: 60
        }}>
        <AntDesign name="hearto" size={24} color="black" />
        <TouchableOpacity
          style={{width: 200, backgroundColor: 'red',paddingVertical: 10,borderRadius: 20, alignItems: 'center'}}
          onPress={() => {
            navigation.navigate('List')
            }}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red', // Màu nền của nút
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 50,
  },
  buttonText: {
    color: 'white', // Màu chữ
    fontSize: 18,
  },
});
