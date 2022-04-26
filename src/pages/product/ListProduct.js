import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-web";

const HEIGHT = Dimensions.get('window').height;

export default function ListProduct() {
  return(
    <ScrollView>
      <View style={styles.imgPro}>
        <Image source={require('../../assets/lap-top.jpeg')} style={{width: '100%', height: '100%'}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgPro: {
    width: '100%',
    height: HEIGHT * 0.5,
  }
});