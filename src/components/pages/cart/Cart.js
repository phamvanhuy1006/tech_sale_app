import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ProductComponent } from "./ProductComponent";

function Cart() {
  const obj = {
    name: "shoe",
    image: require("../../../assets/cr7.jpeg"),
    pricePerProduct: 120000,
    amountOfProducts: 5,
    totalProduct: 20,
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <ProductComponent {...obj} />
        <ProductComponent {...obj} />
        <ProductComponent {...obj} />
        <ProductComponent {...obj} />
        <ProductComponent {...obj} />
        <ProductComponent {...obj} />
        <ProductComponent {...obj} />

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
