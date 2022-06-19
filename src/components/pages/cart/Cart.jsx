import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ProductComponent } from "./ProductComponent";
import { useEffect, useState, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "abortcontroller-polyfill";

function Cart({ route, navigation }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("@cart").then((res) => setCart(JSON.parse(res)));
  }, [route.params?.carts]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 12 }}>
        <ScrollView style={styles.container}>
          {cart.map((order) => (
            <View key={order.shop_id}>
              <Text>{order.shop_id}</Text>
              {order.order.map((product) => (
                <ProductComponent
                  key={product.data.id}
                  quanlity={product.quanlity}
                  {...product.data}
                  navigation={navigation}
                  loading={route.params?.carts}
                />
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.totalTxt}>Total: 100000</Text>
        <TouchableOpacity
          style={styles.checkoutBtn}
          activeOpacity="0.5"
          onPress={() => {
            navigation.navigate("Checkout", { carts: JSON.stringify(cart) });
          }}
        >
          <Text style={styles.checkoutTxt}>Checkout Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // height: "100%",
    backgroundColor: "#f5ecec",
  },
  bottom: {
    // height: "10%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#2fff00",
    padding: 5,
    flex: 1,
  },
  totalTxt: {
    fontWeight: "bold",
    fontSize: 15,
  },
  checkoutTxt: {
    fontWeight: "bold",
    fontSize: 15,
  },
  checkoutBtn: {
    backgroundColor: "#ffd400",
    width: 150,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
export { Cart };
