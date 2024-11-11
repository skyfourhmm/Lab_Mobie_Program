import { Text, View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react'

export default function List({ navigation }) {
//   const data = [
//   { id: '1', name: 'Item 1', image: require('../s21.png'), price: '$200' },
//   { id: '2', name: 'Item 2', image: require('../s21.png'), price: '$200' },
//   { id: '3', name: 'Item 3', image: require('../s21.png'), price: '$200' },
//   { id: '4', name: 'Item 4', image: require('../s21.png') , price: '$200'},
//   { id: '5', name: 'Item 4', image: require('../s21.png') , price: '$200'},
//   { id: '6', name: 'Item 4', image: require('../s21.png') , price: '$200'},
//   { id: '7', name: 'Item 4', image: require('../s21.png') , price: '$200'},
//   { id: '8', name: 'Item 4', image: require('../s21.png') , price: '$200'},
//   { id: '9', name: 'Item 4', image: require('../s21.png') , price: '$200'},
//   { id: '10', name: 'Item 4', image: require('../s21.png') , price: '$200'},
//   { id: '11', name: 'Item 4', image: require('../s21.png') , price: '$200'},
//   { id: '12', name: 'Item 4', image: require('../s21.png') , price: '$200'},
// ]

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://6710fc434eca2acdb5f31239.mockapi.io/api/v1/todo');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  
const Item = ({ name, image, price, id }) => (
  <TouchableOpacity style={styles.item}
    onPress={() => { 
      navigation.navigate('Detail', { id: id })}}
  >
  <View >
    <Image source={require('../assets/s21.png')} style={styles.image} />
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.price}>{price}</Text>
  </View>
  </TouchableOpacity>
);

  return (
    <View style={{marginHorizontal: 10, backgroundColor: "#fff", flex: 1}}>
      <Text style={{fontSize: 20, color: "red", fontWeight: 600, }}>The world's best bike</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
         <TouchableOpacity style={{paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                  marginVertical: 5,
                  backgroundColor: 'transparent',
                  borderColor: 'red',
                  borderWidth: 1,
                  }} onPress={() => console.log('All')}>
           <Text style={{fontSize: 20,
                  fontWeight: 600,
                  color: 'red'
                  }}>All</Text>
         </TouchableOpacity>

          <TouchableOpacity style={{paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                  marginVertical: 5,
                  backgroundColor: 'transparent',
                  borderColor: '#ec5839',
                  borderWidth: 1,
                  }} onPress={() => console.log('All')}>
            <Text style={{fontSize: 20,
                  fontWeight: 600,
                  color: '#ec5839'
                  }}>Roadbike</Text>
          </TouchableOpacity>

        <TouchableOpacity style={{paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                  marginVertical: 5,
                  backgroundColor: 'transparent',
                  borderColor: 'yellow',
                  borderWidth: 1,
                  }} onPress={() => console.log('All')}>
          <Text style={{fontSize: 20,
                  fontWeight: 600,
                  color: 'yellow'
                  }}>Moutain</Text>
        </TouchableOpacity>

        
        
      </View>
      <View style={{marginTop: 10, height: "100%", flex: 1 }}>
          <FlatList
          data={data}
          renderItem={({ item }) => <Item name={item.name} image={item.image} price={item.price} id={item.id} />}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.container}
          scrollEnabled={true}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 20,
    height: "100%"
  },
  item: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#f5dcdc',
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 700
  },
  price: {
    fontSize: 16,
    fontWeight: 600
  }
});

