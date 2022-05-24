import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import { Rating, AirbnbRating } from "react-native-ratings";
import { request } from "~/lib";
import { useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Product = (props) => {

  const [loading, setLoading] = useState(false)
  const storeData = async (value) => {
    setLoading(true)
    try {
      const response = await request.get(`/api/product/${value}`);
      var product = { data: response.data.data, quanlity: 1 };
      let cart = [];
      let jsonCart = await AsyncStorage.getItem("@cart", jsonCart);
      if (jsonCart) {
        cart = JSON.parse(jsonCart);
      }
      if (product != null) {
        const index = cart.indexOf(cart.find((item) => item.data.id === value));
        if (index === -1) {
          cart.push(product);
        } else {
          cart[index].quanlity += 1;
        }
      }
      jsonCart = JSON.stringify(cart);
      await AsyncStorage.setItem("@cart", jsonCart);
      setLoading(false)
      props.navigation.navigate("cart", {carts: jsonCart});
      // console.log('cartday',navigation);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  return (
    <View style={styles.product}>
      <View style={styles.boxImage}>
        <Image
          source={{ uri: props.image }}
          style={styles.imgPro}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text numberOfLines={1} style={styles.namePro}>
          {props.name}
        </Text>
        <View style={styles.row}>
          <Text style={styles.price}>đ{props.price}</Text>
          <Text style={styles.salePrice}>đ{props.salePrice}</Text>
          <Text style={styles.salePercent}>{props.salePercent}%</Text>
        </View>
        <Text style={styles.rest}>Còn: {props.stock}</Text>
      </View>
      <TouchableOpacity
        style={styles.addPro}
        onPress={() => {
          storeData(props.id);
        }}
      >
        <Icon name="add-to-list" color="green" type="entypo" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconHeart}>
        <Icon name="heart-o" type="font-awesome" />
      </TouchableOpacity>
      <View style={styles.rating}>
        <Rating imageSize={15} readonly startingValue={props.rate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    width: 135,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: "3%",
    // justifyContent: 'center',
    height: 200,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imgPro: {
    marginTop: "5%",
    width: 80,
    height: 80,
    // backgroundColor: 'red',
    resizeMode: "stretch",
    borderRadius: 10,
  },

  namePro: {
    fontSize: 14,
    fontWeight: "500",
  },
  price: {
    color: "#696969",
    fontSize: 12,
    marginRight: 3,
  },

  salePrice: {
    color: "red",
    fontWeight: "500",
    marginRight: 3,
    fontSize: 15,
  },

  salePercent: {
    backgroundColor: "#ee4d2d",
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    borderRadius: 5,
    paddingTop: 2,
    width: 20,
    height: 18,
  },

  rest: {
    fontSize: 12,
    color: "red",
    fontWeight: "500",
    marginBottom: "5%",
    paddingBottom: "5%",
  },

  addPro: {
    position: "absolute",
    bottom: "5%",
    right: "5%",
  },

  iconHeart: {
    position: "absolute",
    top: "5%",
    right: "5%",
  },
  rating: {
    alignItems: "flex-start",
  },
});
export { Product };
