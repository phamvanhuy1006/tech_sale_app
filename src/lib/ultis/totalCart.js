import AsyncStorage from "@react-native-async-storage/async-storage";
import { request } from "~/lib";
import { Alert } from "react-native";

const totalCart = async () => {
  const jsonCart = await AsyncStorage.getItem("@cart");
  const cart = JSON.parse(jsonCart)
  cart.map(order => {
    return {
      order.map
    }
  })
};
