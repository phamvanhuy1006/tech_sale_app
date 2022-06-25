import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { OrderComponent } from "./OrderComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Shop } from "../";

const ToPay = ({ route, navigation }) => {
  const data = {
    isToPayTab: true,
    code: 123,
    totalPrice: 1000000,
    TotalProduct: 5,
    paymentMethod: "payment on delivery",
  };

  const [cart, setCart] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("@cart").then((res) => setCart(JSON.parse(res)));
  }, [route.params?.carts]);

  return (
    <SafeAreaView style={{ width: "100%", height: "100 %", paddingHorizontal: 5 }}>
      <ScrollView>
        {cart.map((order) => (
          <View key={order.shop_id}>
          <Shop shop_id={order?.shop_id} />
            {order.order.map((product) => (
              <OrderComponent
                key={product.data.id}
                {...product.data}
                quanlity={product.quanlity}
                isToPayTab={true}
                navigation={navigation}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export { ToPay };
