import AsyncStorage from "@react-native-async-storage/async-storage";
import { request } from "~/lib";
import { Alert } from "react-native";
import { StackActions } from "@react-navigation/native";

const addToCart = async (value, navigation) => {
  try {
    const response = await request.get(`/api/product/${value}`);
    var product = {
      data: response.data.data,
      quanlity: 1,
      shop_id: response.data.data.id_shop,
    };
    let cart = [];

    let jsonCart = await AsyncStorage.getItem("@cart");

    if (jsonCart) {
      cart = JSON.parse(jsonCart);
    }

    if (product != null) {
      const indexShop = cart.indexOf(
        cart.find((order) => order.shop_id === product.shop_id)
      );
      if (indexShop === -1) {
        const order = [product];
        const shop = {
          shop_id: product.shop_id,
          order: order,
        };
        cart.push(shop);
      }
       else {
        const order = cart[indexShop].order;
        console.log(cart)
        const indexOrder = order.indexOf(order.find((product) => product.data.id === value))
        if (indexOrder === -1) {
          cart[indexShop].order.push(product)
        }
      }
    }

    jsonCart = JSON.stringify(cart);
    await AsyncStorage.setItem("@cart", jsonCart);

    navigation.navigate("cartnavigation", {
      screen: "cart",
      params: {
        carts: jsonCart,
      },
    });

    Alert.alert("Đặt hàng thành công");
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export { addToCart };
