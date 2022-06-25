import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { OrderLine } from "./OrderLine";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useContext } from "react";
import UserContext from "~/context/UserContext";
import { Icon } from "@rneui/themed";
import { getAddress } from "~/lib/ultis";
import { Shop } from "../";
import { Divider } from "react-native-elements";

function Checkout({ route, navigation }) {
  const [cart, setCart] = useState([]);
  const user = useContext(UserContext);
  const [address, setAddress] = useState();

  useEffect(() => {
    AsyncStorage.getItem("@cart").then((res) => setCart(JSON.parse(res)));
    AsyncStorage.getItem("@address").then((res) => setAddress(JSON.parse(res)));
  }, [route.params?.carts]);

  // if(cart) {
  //   let newCart = []
  //   (cart.map((order, index) => newCart+=))
  // }
  console.log(111,cart);

  return (
    <SafeAreaView
      style={{ width: "100%", height: "100 %", paddingHorizontal: 10 }}
    >
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          <View style={{ flex: 1 }}>
            <Icon name="location-pin" color="#f94f30" type="evil-icons" />
          </View>
          <View style={styles.shippingAddress}>
            <Text style={styles.titleShippingAddress}>Địa chỉ nhận hàng</Text>

            <View style={styles.detail}>
              <View style={styles.address}>
                <Text style={styles.txtAddress}>
                  {user?.name}
                  {address?.main_address}
                </Text>
              </View>

              <View style={styles.detailAddress}>
                <Text>{address?.address_detail}</Text>
              </View>
            </View>
          </View>
          <View style={styles.optionsAddress}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ListAddress");
              }}
            >
              <Icon name="arrow-forward-ios" />
            </TouchableOpacity>
          </View>
        </View>

        <Divider orientation="horizontal" width={2} />

        <View style={styles.orderLines}>
          {cart.map((order) => (
            <View key={order.shop_id}>
              <Shop shop_id={order?.shop_id} />
              {order.order.map((product) => (
                <OrderLine
                  key={product.data.id}
                  quanlity={product.quanlity}
                  {...product.data}
                />
              ))}
              <Divider
                orientation="horizontal"
                width={2}
                style={{ marginTop: 5 }}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.payMethod}>
        <View style={{ flex: 1 }}>
          <Icon name="dollar-sign" color="#f94f30" type="feather" />
        </View>
        <Text style={{ flex: 3 }}>Phương thức thanh toán</Text>
        <Divider
                    orientation="vertical"
                    width={2}
                    style={{ marginHorizontal: 3 }}
                  />
        <View style={{ flex: 4, flexDirection: "row" }}>
          <Text>Thanh toán khi nhận hàng </Text>
        </View>
        <TouchableOpacity>
          <Icon name="arrow-forward-ios" />
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.totalTxt}>Total: {route?.params?.totalCart}</Text>
        <TouchableOpacity
          style={styles.checkoutBtn}
          activeOpacity="0.5"
          onPress={() => {
            [navigation.navigate("OrderNavigation")];
          }}
        >
          <Text style={styles.checkoutTxt}>Confirm and Pay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 5,
    width: "100%",
    height: "100%",
  },
  shippingAddress: {
    flexDirection: "column",
    paddingHorizontal: 15,
    flex: 14,
  },
  titleShippingAddress: {
    fontSize: 15,
    color: "orange",
    fontWeight: "bold",
  },
  detail: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  address: {},
  txtAddress: {
    fontWeight: "bold",
  },
  detailAddress: {},
  optionsAddress: {
    marginTop: 5,
    flex: 1,
  },
  txtChangeAddress: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  orderLines: {
    marginTop: 10,
    marginBottom: 10,
  },
  bottom: {
    height: 50,
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
  payMethod: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export { Checkout };
