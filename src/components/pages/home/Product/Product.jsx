import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import { Icon } from "@rneui/themed";
import { Rating, AirbnbRating } from "react-native-ratings";
import { request } from "~/lib";
import { useState } from "react";
import { addToCart } from "~/lib/ultis";

const { width: screenWidth } = Dimensions.get("window");

const Product = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={[styles.product, props.style]}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("cartnavigation", {
            screen: "ShowProduct",
            params: {
              productId: props.id
            }
          });
        }}
        style={styles.boxImage}
      >
        <Image
          source={{ uri: props.image }}
          style={styles.imgPro}
          resizeMode="contain"
        />
      </TouchableOpacity>

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
          addToCart(props.id, props.navigation);
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
    width: '100%',
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: 'hidden',
    padding: 1,
    height: 200
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
    textDecorationLine: 'line-through'
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
