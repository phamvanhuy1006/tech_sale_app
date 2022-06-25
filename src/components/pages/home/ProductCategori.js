import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Link } from "react-router-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const ProCategori = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.product}>
      {/* <Image source={require('../../assets/icon.png')} style={styles.imgProduct} /> */}
      {/* them icon cho tung the loai sna pham */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("homeNavigation", {
            screen: "ProductList",
            params: {
              id_category: props?.params,
            },
          });
        }}
      >
        <Icon
          name={props.icon.name}
          color={props.icon.color}
          type={props.icon.type}
        />
      </TouchableOpacity>
      <Text style={styles.namePro}>{props.name}</Text>
    </View>
  );
};

function ProductCategori() {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Loại sản phẩm</Text>

      <View style={styles.flex}>
        <ProCategori
          icon={{
            name: "mobile-phone",
            type: "font-awesome",
            color: "#FF6600",
          }}
          name="Phone"
          params={1}
        />
        <ProCategori
          icon={{ name: "laptop", type: "font-awesome", color: "#3399FF" }}
          name="Laptop"
          params={2}
        />
        <ProCategori
          icon={{
            name: "fridge",
            type: "material-community",
            color: "#FF3300",
          }}
          name="Refrigeration"
          params={3}
        />
      </View>
      <View style={styles.flex}>
        <ProCategori
          icon={{ name: "camera", type: "font-awesome", color: "#33CC33" }}
          name="Camera"
          params={4}
        />
        <ProCategori
          icon={{ name: "tablet", type: "font-awesome", color: "#003333" }}
          name="Ipad"
          params={5}
        />
        <ProCategori
          icon={{ name: "gamepad", type: "font-awesome", color: "#3399FF" }}
          name="Accessory"
          params={6}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginLeft: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: "3%",
    color: 'orange'
  },

  flex: {
    flexDirection: "row",
    marginTop: "3%",
  },

  product: {
    marginRight: "2%",
    width: "30%",
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  namePro: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: "5%",
  },
  imgProduct: {
    width: 100,
    height: 100,
  },
});

export { ProductCategori };
