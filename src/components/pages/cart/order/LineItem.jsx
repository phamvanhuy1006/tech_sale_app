import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { salePrice } from "~/lib/ultis";

const LineItem = ({
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
  quanlity,
  loading,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: images }} />
      </View>

      <View style={styles.details}>
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View>
          <Text numberOfLines={1} style={styles.store}>Ten Cua Hang</Text>
        </View>
        <View style={styles.quantityAndPrice}>
          <Text style={styles.price}>
            Giá: {salePrice(price, flash_sale_percent)}
          </Text>
          <Text style={styles.txtQuantity}>Quantity: {quanlity}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    borderStyle: "solid",
    borderColor: "#2529c5",
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
    backgroundColor: "#ffffff",
    height: 200,
    paddingLeft: 5
  },
  image: {
    width: 160,
    height: "80%",
    borderRadius: 10,
  },
  amountOfProduct: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "70%",
  },
  details: {
    marginLeft: 5,
    width: "70%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  name: {
    fontSize: 20,
  },
  store: {
    fontSize: 15,
    color: "gray",
  },
  quantityAndPrice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  price: {
    fontSize: 13,
    fontWeight: "bold",
    marginRight: 50,
  },
  txtQuantity: {
    fontSize: 13,
    fontWeight: "bold",
    // justifyContent: "flex-end",
    // alignItems: "flex-end",
  },
});

export { LineItem };
