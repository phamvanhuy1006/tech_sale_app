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

function Cart({ route, navigation }) {
  const [cart, setCart] = useState([]);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@cart");
      if (value !== null) {
        setCart(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, [route.params?.carts]);
  console.log(route.params?.carts);

  // a.splice(a.indexOf(a.find(item => item.id === 2)), 1)
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {cart.map((product) => (
          <ProductComponent
            key={product.data.id}
            quanlity={product.quanlity}
            {...product.data}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <View style={styles.bottom}>
        <Text style={styles.totalTxt}>Total: 100000</Text>
        <TouchableOpacity style={styles.checkoutBtn} activeOpacity="0.5">
          <Text style={styles.checkoutTxt}>Checkout Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "83%",
    backgroundColor: "#f5ecec",
  },
  bottom: {
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#2fff00",
    padding: 5,
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
    borderRadius: 10000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
export { Cart };
