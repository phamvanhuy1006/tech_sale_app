import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Icon } from "react-native-elements";
import { useEffect, useState } from "react";

const ProductComponent = ({
  name,
  image,
  pricePerProduct,
  amountOfProducts,
  totalProduct,
}) => {
  const [amountState, setAmount] = useState(amountOfProducts);

  const increment = () => {
    if (amountState < totalProduct) {
      setAmount(amountState + 1);
    }
  };

  const decrement = () => {
    if (amountState > 0) {
      setAmount(amountState - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Icon name="x-circle" type="feather" />
        </TouchableOpacity>
      </View>

      <View>
        <Image style={styles.image} source={image} />
      </View>

      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Giá: {amountOfProducts}</Text>
      </View>

      <View style={styles.amountOfProduct}>
        <TouchableOpacity onPress={decrement} style={{ marginRight: 5 }}>
          <Icon name="minus" type="feather" color="#ff000f" />
        </TouchableOpacity>
        <View>
          <Text>{amountState}</Text>
        </View>
        <TouchableOpacity onPress={increment} style={{ marginLeft: 5 }}>
          <Icon name="add" type="ionicon" color="#2fff00" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: "100%",
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: "#f5ecec",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 5,
    alignItems: "center",
  },
  image: {
    width: 160,
    height: "80%",
    marginLeft: 5,
  },
  amountOfProduct: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    marginLeft: 5,
    width: 130,
  },
  name: {
    fontSize: 15,
  },
  price: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export { ProductComponent };
