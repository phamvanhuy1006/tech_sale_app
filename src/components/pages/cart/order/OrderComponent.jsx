import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { salePrice } from "~/lib/ultis";
import { Icon } from "react-native-elements";
import { LineItem } from "./LineItem";
import { OrderLine } from "../checkout";
import { handleDeleteOrder } from "~/lib/ultis";

const OrderComponent = ({
  isToPayTab,
  code,
  totalPrice,
  totalProduct,
  paymentMethod,
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
  stock,
  id_shop,
  quanlity,
  loading,
  navigation,
}) => {
  const lineItemData = {
    description: description,
    flash_sale_percent: flash_sale_percent,
    flash_sale_time: flash_sale_time,
    id: id,
    images: images,
    name: name,
    number_of_likes: number_of_likes,
    number_of_rate: number_of_rate,
    price: price,
    rate: rate,
    stock: stock,
    quanlity: quanlity,
    loading: loading,
    navigation: navigation,
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <View>
            <Text style={styles.bold}>Code: {code}</Text>
          </View>
          <View style={isToPayTab == true ? styles.show : styles.hide}>
            <TouchableOpacity
              onPress={() => {
                handleDeleteOrder(id, id_shop, navigation, "ToPay");
              }}
              style={styles.btnDelete}
            >
              <Text style={styles.bold}>Cancel</Text>
              <Icon name="delete" type="material-community" color="red" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.subTop}>
          <Text>Payment method:</Text>
          <Text>{paymentMethod}</Text>
        </View>
        <View style={styles.middle}>
          <LineItem {...lineItemData} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  hide: {
    display: "none",
  },
  container: {
    minHeight: 400,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 10,
    padding: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  top: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subTop: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  btnDelete: {
    width: 100,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  middle: {
    flex: 10,
    marginBottom: 10,
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 5,
  },
});

export { OrderComponent };
