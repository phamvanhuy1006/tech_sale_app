import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import { Icon } from "react-native-elements";
import { useEffect, useState } from "react";
import { salePrice } from "~/lib/ultis";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductComponent = ({
  description,
  flash_sale_percent,
  flash_sale_time,
  id,
  images,
  name,
  number_of_likes,
  number_of_rate,
  price,
  rate,
  id_shop,
  stock,
  quanlity,
  loading,
  navigation,
}) => {
  const [amountState, setAmount] = useState(quanlity);
  const [productId, setProductId] = useState(id);
  const [cart, setCart] = useState([]);

  const increment = async () => {
    if (amountState < stock) {
      setAmount(amountState + 1);
    }
  };

  const decrement = async () => {
    if (amountState > 0) {
      setAmount(amountState - 1);
    }
  };

  useEffect(() => {
    try {
      AsyncStorage.getItem("@cart").then((res) => {
        return [setCart(JSON.parse(res))];
      });
    } catch (e) {
      // saving error
      // Alert.alert("updateCart bị lỗi");
      console.log(e);
    }
  }, [amountState]);

  useEffect(() => {
    if (JSON.stringify(cart) != "[]") {
      const indexShop = cart.indexOf(
        cart.find((order) => order.shop_id === id_shop)
      );
      if (indexShop === -1) {
      } else {
        const order = cart[indexShop].order;
        const indexOrder = order.indexOf(
          order.find((product) => product.data.id === productId)
        );
        if (indexOrder !== -1) {
          cart[indexShop].order[indexOrder].quanlity = amountState;
        }
        AsyncStorage.setItem("@cart", JSON.stringify(cart));
      }
    }
  }, [cart]);

  const handleDelete = async () => {
    try {
      let cart = [];
      let jsonCart = await AsyncStorage.getItem("@cart", jsonCart);
      if (jsonCart) {
        cart = JSON.parse(jsonCart);
      }
      // const index = cart.indexOf(
      //   cart.find((item) => item.data.id === productId)
      // );
      // if (index === -1) {
      // } else {
      //   cart.splice(index, 1);
      // }
      const indexShop = cart.indexOf(
        cart.find((order) => order.shop_id === id_shop)
      );
      if (indexShop === -1) {

      } else {
        const order = cart[indexShop].order;
        const indexOrder = order.indexOf(
          order.find((product) => product.data.id === productId)
        );
        if (indexOrder !== -1) {
          cart[indexShop].order.splice(indexOrder, 1);
        }
        jsonCart = JSON.stringify(cart);
        await AsyncStorage.setItem("@cart", jsonCart);
        navigation.navigate("cartnavigation", {
          screen: "cart",
          params: {
            carts: jsonCart,
          },
        });
      }
    } catch (e) {
      // saving error
      Alert.alert("handleDelete bị lỗi");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            handleDelete();
          }}
        >
          <Icon name="x-circle" type="feather" />
        </TouchableOpacity>
      </View>

      <View>
        <Image style={styles.image} source={{ uri: images }} />
      </View>

      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>
          Đơn giá: {salePrice(price, flash_sale_percent)}
        </Text>
        <Text style={styles.price}>Số lượng: {amountState}</Text>
      </View>

      <View style={styles.amountOfProduct}>
        <TouchableOpacity onPress={decrement} style={{ alignItems: "center" }}>
          <Icon name="minus" type="feather" color="#ff000f" />
        </TouchableOpacity>
        <View style={{ backgroundColor: "white", alignItems: "center" }}>
          <Text>{amountState}</Text>
        </View>
        <TouchableOpacity onPress={increment} style={{ alignItems: "center" }}>
          <Icon name="add" type="ionicon" color="#2fff00" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: "100%",
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: "#f5ecec",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 5,
    alignItems: "center",
  },
  image: {
    width: 160,
    height: "80%",
    marginLeft: 5,
    borderRadius: 10,
  },
  amountOfProduct: {
    flexDirection: "column",
    backgroundColor: "#FFA500",
    borderRadius: 10,
  },
  details: {
    marginLeft: 5,
    width: 130,
  },
  name: {
    fontSize: 15,
  },
  price: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export { ProductComponent };
