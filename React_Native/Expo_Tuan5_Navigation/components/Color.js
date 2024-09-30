import {Text, View, Image, TouchableHighlight, Button} from "react-native"
import {useState, useEffect} from "react"

export default function Color({navigation}) {
  

  const colors = [
    {
      id: 1,
      title: "đỏ",
      hex: "#f30d0d",
    },
    {
      id: 2, 
      title: "xanh",
      hex: "#234896"
    }, 
    {
      id: 3, 
      title: "bạc", 
      hex: "#c5f1fb"
    },
    {
      id: 4, 
      title: "đen",
      hex: "#000"
    }
  ]

  const [curentColor, setCurentColor] = useState(colors[0].title)

  return (
    <View style={{flex: 1, margin: 10}}>
      <View style={{height:"40%", width: "100%", flexDirection:"row"}}>
          <Image
            style={{width: "30%", height: "60%", resizeMode: 'stretch'}}
            source={require('../assets/vs_blue.png')}
          />
      <View style ={{marginLeft: 10}}>
        <Text>Điện thoại Vsmart Joy 3 - Hàng chính Hãng</Text>
        <Text>{`màu: ${curentColor}`}</Text>
        <Text>Cung cấp bởi TIKI TRADING</Text>
        <Text>1.700.000</Text>
      </View>
      </View>

      <View style={{width: "100%", alignItems: "center"}}>
      <Text>Chọn 1 trong các màu dưới</Text>
        {colors.map(e => ( 
          <TouchableHighlight onPress={() => setCurentColor(c => c = e.title)}>
            <View style={{ height: "60px", width: "60px", backgroundColor: e.hex}}></View>
          </TouchableHighlight>
          ))
        }
      </View>
        <View style={{marginTop: "auto"}}>
        <Button title="xong" onPress={() => navigation.navigate('Home')}/>
      </View>
    </View>
  )
}

