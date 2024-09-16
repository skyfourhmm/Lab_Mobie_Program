import {View, Image, StyleSheet, Text, Button} from 'react-native';
import React, { useState } from 'react'



export default function Bai_1 () {
  const defaultPrice = 141.800
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(count*defaultPrice)

  const handlePrev = () => {
    count <= 0 ? setCount(0) : setCount(e => e-1) 

    price <= 0 ? setPrice(0) : setPrice((count-1)*defaultPrice)
  }
  const handleNext = () => {
    setCount(e => e+1)
    setPrice((count+1)*defaultPrice)
  }

  const handleEnd = () => {
    setPrice(0) 
    setCount(0)
  }

  return (
    <View style={styles.container}>
       <View style={styles.header}> 
        <Image style={styles.image} source={require('../assets/book.png')} />
        <View style={styles.containerHeader}>
          <Text style={{fontSize: 10, fontWeight: 700}}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={{fontSize: 10, fontWeight: 700, marginTop: 20}}>Cung cấp bởi Tiki Trading</Text>
          <Text style={{fontSize: 20, fontWeight: 800, marginTop: 10, color: "red"}}>{`${defaultPrice} đ`}</Text>
          <Text style={{fontSize: 15, fontWeight: 800, marginTop: 5, color: "#7a7a7a", textDecorationLine: 'line-through'}}>141.800 đ</Text>
          <View style={{flexDirection:"row", alignContent:"center"}}>
            <Button
              title="-"
              onPress={() => handlePrev()}
              color = "#7a7a7a"
            />
            <Text style={{marginHorizontal: 10}}>{count}</Text>
            <Button
              title="+"
              onPress={() => handleNext()}
              color = "#7a7a7a"
            />
            <Text style={{marginLeft: 50, color:"blue"}}>mua sau</Text>
          </View>
        </View>
       </View>
       <View style={styles.center}>
        <View style={{borderWidth: "1px", height: "50%", width: "30%"}}>Mã giảm giá</View>
        <Button title="Áp dụng"/>
       </View>
       <View style={styles.footer}>
          <View style={{flexDirection:"row", flex: 1, justifyContent:"space-between", marginHorizontal: 10}}>
            <Text style={{color:"#7a7a7a", fontWeight: 700, fontSize: 20}}>Thành tiền: </Text>
            <Text style={{color:"red", fontWeight: 700, fontSize: 20}}>{`${price.toFixed(2)} đ`}</Text>
          </View>
          <Button title="Tiến hành dặt hàng" color="red" onPress={() => handleEnd()}/>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    
  },
  header : {
    margin: 10,
    borderWidth: "1px",
    height: "30%",
    flexDirection : "row",
  },
  image : {
    margin : 10,
  }, 
  containerHeader : {
    margin: 10,
  },
  footer : {
    margin: 10,
    borderWidth: "1px",
    height: "20%",
    marginTop: "auto"
  },
  center : {
    margin: 10,
    borderWidth: "1px",
    height: "10%",
    flexDirection: "row", 
    justifyContent: "space-around", 
    alignItems: "center"
  }
});

