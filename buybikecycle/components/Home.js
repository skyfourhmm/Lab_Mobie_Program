import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 600}}>A premium online store for sporter and their stylish choice</Text>
      <View style={{backgroundColor: 'pink', width: '100%', justifyContent: 'center', alignItemsL: 'center', flexDirection: 'row', borderRadius: 20, marginTop: 20}}>
         <Image
        source={require('../assets/s1.png')} // Đường dẫn đến ảnh PNG trong dự án
        style={styles.image}
        />
      </View>
      <View>
        <Text style={{fontSize: 20, fontWeight: 600, marginTop: 50}}>POWER BIKE SHOP</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'red',     // Màu nền của nút
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 50
  },
  buttonText: {
    color: 'white',             // Màu chữ
    fontSize: 18,
  },
});
