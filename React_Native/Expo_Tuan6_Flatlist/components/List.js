import { Text, View, StatusBar, Image, TouchableOpacity, SafeAreaView , FlatList } from 'react-native';

export default function List() {

  const products = [
  {
    "id" : 1,
    "product_name": "Áo Thun Nam Cổ Tròn Cotton",
    "shop_name": "Shop Đồ Nam Xịn",
    "rating": 4.8,
    "discount": "20%",
    "current_price": "120,000 VND",
    "image_url": "../assets/noicom.jpg"
  },
  {
    "id" : 2,
    "product_name": "Giày Sneaker Nữ Phong Cách Hàn Quốc",
    "shop_name": "Fashion Store",
    "rating": 4.7,
    "discount": "15%",
    "current_price": "350,000 VND",
    "image_url": "../assets/noicom.jpg"
  },
  {
    "id" : 3,
    "product_name": "Tai Nghe Bluetooth Chống Ồn",
    "shop_name": "TechGear Official",
    "rating": 4.9,
    "discount": "30%",
    "current_price": "220,000 VND",
    "image_url": "../assets/noicom.jpg"
  },
  {
    "id" : 4,
    "product_name": "Đèn Ngủ LED Đổi Màu",
    "shop_name": "Home Decor",
    "rating": 4.6,
    "discount": "25%",
    "current_price": "150,000 VND",
    "image_url": "../assets/noicom.jpg"
  },
  {
    "id" : 5,
    "product_name": "Túi Tote Vải Canvas Thời Trang",
    "shop_name": "Túi Xách Siêu Hot",
    "rating": 4.5,
    "discount": "10%",
    "current_price": "90,000 VND",
    "image_url": "../assets/noicom.jpg"
  },
  {
    "id" : 6,
    "product_name": "Bàn Phím Cơ LED RGB Gaming",
    "shop_name": "Gaming Gear",
    "rating": 4.8,
    "discount": "35%",
    "current_price": "800,000 VND",
    "image_url": "../assets/noicom.jpg"
  },
  {
    "id" : 7,
    "product_name": "Nước Hoa Nam Cao Cấp",
    "shop_name": "Perfume Store",
    "rating": 4.9,
    "discount": "20%",
    "current_price": "1,200,000 VND",
    "image_url": "../assets/noicom.jpg"
  },
  {
    "id" : 8,
    "product_name": "Mũ Lưỡi Trai Nam Nữ Thời Trang",
    "shop_name": "Phụ Kiện Hot",
    "rating": 4.7,
    "discount": "5%",
    "current_price": "75,000 VND",
    "image_url": "../assets/noicom.jpg"
  },
  {
    "id" : 9,
    "product_name": "Áo Khoác Hoodie Unisex",
    "shop_name": "Streetwear Store",
    "rating": 4.6,
    "discount": "40%",
    "current_price": "260,000 VND",
    "image_url": "../assets/noicom.jpg"
  },
  {
    "id" : 10,
    "product_name": "Balo Laptop Chống Thấm Nước",
    "shop_name": "Balo Gear",
    "rating": 4.8,
    "discount": "18%",
    "current_price": "500,000 VND",
    "image_url": "../assets/noicom.jpg"
  }
]


  return (
    <View style={{flex: 1, padding: 10}}>
      <View style={{borderBlockColor: "#dadada", borderBottomWidth: "1px", paddingBottom: 15}}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem, đừng ngại chat với shop</Text>
      </View>
      <SafeAreaView style={{marginTop: StatusBar.currentHeight || 0}}> 
        <FlatList 
          data={products}
          renderItem={({item}) => <View style={{borderBlockColor: "#dadada", borderBottomWidth: "1px", paddingBottom: 15,paddingRight : 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <Image source={require('../assets/noicom.jpg')} style={{width: 100, height: 100}}/>
        <View>
          <Text style={{maxWidth: 150}}>{item.product_name}</Text>
          <View style={{flexDirection: "row", marginTop : 10}}>
            <Text style={{color: "#998f8e"}}>Shop </Text>
            <Text>{item.shop_name} </Text>
          </View>
        </View>
        <TouchableOpacity style={{backgroundColor : "red", height: 50, width: 70, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: 10}}>
          <Text style={{color: "#fff"}}>Chat</Text>
        </TouchableOpacity >
      </View>}
          keyExtractor={item => item.id}
         /> 
      </SafeAreaView>
    </View>
  );
}