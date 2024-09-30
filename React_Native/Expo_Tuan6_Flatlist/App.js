import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';




const data = [
  {
    id: '1',
    title: 'Nồi cơm điện nấu cơm',
    shop: 'Shop Devang',
    image: require('./assets/noicom.jpg'),
  },
  {
    id: '2',
    title: 'Gà khô bơ tỏi',
    shop: 'Shop LTD Food',
    image: require('./assets/ga_bo_toi.png'),
  },
  {
    id: '3',
    title: 'Xe đồ chơi cho bé',
    shop: 'Shop Thế giới đồ chơi',
   image: require('./assets/xa_can_cau.png'),
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    image: require('./assets/lanh_dao_gian_don.png'),
  },
   {
    id: '6',
    title: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: require('./assets/hieu_long_con_tre.png'),
  },
];

export default function App() {

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemShop}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
    <View style = {styles.header}>
    <TouchableOpacity>
      <Ionicons name="arrow-back-outline" size={24} color="white" />
      </TouchableOpacity>
      <Text style= {{color: 'white', fontWeight: 600, fontSize: 17}}> Chat </Text>
      <TouchableOpacity>
      <AntDesign name="shoppingcart" size={24} color="white" />
      </TouchableOpacity>
    </View>

    <ScrollView style= {styles.body}> 
    <View style= {{paddingLeft: 10, paddingRight: 10, marginTop: 10}}>
    <Text style = {{fontWeight: 500}}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!</Text>
     </View>
      <View style = {{marginTop: 20}}>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  
    </View>
    </ScrollView>

    <View style = {styles.footer}> 
    <TouchableOpacity>
    <Entypo name="menu" size={24} color="black" />  </TouchableOpacity>
    <TouchableOpacity>
    <AntDesign name="home" size={24} color="black" /> </TouchableOpacity>
    <TouchableOpacity>
    <AntDesign name="back" size={24} color="black" /></TouchableOpacity>
    
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 42,
    backgroundColor: '#1BA9FF',
  },
  body: {
    
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 42,
    backgroundColor: '#1BA9FF',
  },
 itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImage: {
    width: 74,
    height: 74,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemShop: {
    color: 'gray',
  },
  chatButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});