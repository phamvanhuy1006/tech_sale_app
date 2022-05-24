import { Text, View, StyleSheet, Image, Button } from "react-native";
import { Product } from "./Product";
import { request } from "~/lib";
import { useState, useEffect } from "react";
import { salePrice, round } from '~/lib/ultis'

function TopProduct({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    request
      .get("/api/product")
      .then((response) => setProducts(response.data.data));
  });

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Top Product</Text>
      <View style={styles.buttonView}></View>

      <View style={styles.row}>
        {products.map((product) => [
          <View key={product.id} style={styles.card}>
            <Product
              name={product?.name}
              image={product.images}
              salePrice={salePrice(product?.price, product?.flash_sale_percent)}
              stock={product?.stock}
              rate={round(product?.rate)}
              price={product?.price}
              salePercent={product?.flash_sale_percent}
              id={product?.id}
              navigation={navigation}
            />
          </View>,
        ])}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginLeft: "5%",
    marginRight: "5%",
    flex: 1,
    marginTop: "5%",
    marginBottom: "5%",
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: "3%",
  },

  flex: {
    flexDirection: "row",
    marginTop: "6%",
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "5%",
    width: "100%",
  },

  buttonView: {
    width: 100,
    position: "absolute",
    right: "5%",
    top: "1%",
  },
  card: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    maxWidth: "50%",
    textAlign: "center",
  },
});

export { TopProduct };
