import { Text, View, StyleSheet, Image, Button, TouchableHighlight } from 'react-native';
import * as React from 'react';


export default function Home({navigation}) {

  const phones = [
    {
      id: 1,
      title: "phone red", 
      path: '../assets/vs_red.png'
    },
    {
      id: 2,
      title: "phone blue", 
      path: '../assets/vs_blue.png'
    },
  ]

  return (
    <View style={{flex: 1, margin: 10}}>
      <Image
        style={{width: "80%", height: "50%", resizeMode: 'stretch', marginHorizontal: "auto"}}
        source={require('../assets/vs_blue.png')}
      />
      <Text style={{marginTop: 10}}>Điện thoại Vsmart Joy 3 - Hàng chính Hãng</Text>
      <View style={{flexDirection:"row", alignItems: "center"}}>
        <View style={{flexDirection:"row"}}>
          <Image
            source={require('../assets/star.png')}
          />
          <Image
            source={require('../assets/star.png')}
          />
          <Image
            source={require('../assets/star.png')}
          />
          <Image
            source={require('../assets/star.png')}
          />
          <Image
            source={require('../assets/star.png')}
          />
        </View>
        <Text style={{marginLeft:"auto"}}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={{flexDirection:"row", alignItems : "baseline"}}>
        <Text style={{fontSize: 20, fontWeight: 700, marginTop: 10}}>1.790.000 đ</Text>
        <Text style={{fontSize: 15, fontWeight: 800, marginTop: 5, color: "#7a7a7a", textDecorationLine: 'line-through', marginLeft: 90}}>141.800 đ</Text>
      </View>
      <Text style={{fontSize: 15, fontWeight: 700, marginTop: 10, color:"red"}}>
        ở đâu rẻ hơn hoàn tiền
      </Text>
      <TouchableHighlight onPress={() => navigation.navigate('Color')}>
        <View style={{alignItems: 'center', backgroundColor: '#DDDDDD', padding: 10, marginTop : 10}}>
          <Text>4 màu - chọn màu</Text>
        </View>
      </TouchableHighlight>
      <View style={{marginTop: "auto"}}>
        <Button title="CHỌN MUA" color="red" />
      </View>
      
    </View>
  );
}
