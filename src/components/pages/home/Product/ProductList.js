import { useEffect, useState } from "react";
import { request } from "~/lib/request";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Product } from "./Product";
import { salePrice, round } from "~/lib/ultis";

export const ProductList = ({ navigation, route }) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    request
      .get("api/product/param?id_category=" + route?.params?.id_category)
      .then((response) => setProducts(response.data.data));
  }, [route?.params?.id_category]);

  return (
    <ScrollView>
      <View>
        <Text>Ten cua hang</Text>
      </View>
      <View style={styles.row}>
        {products?.map((product) => [
          <View key={product.id} style={styles.card}>
            <Product
              name={product?.name}
              image={product?.images}
              salePrice={salePrice(product?.price, product?.flash_sale_percent)}
              stock={product?.stock}
              rate={round(product?.rate)}
              price={product?.price}
              salePercent={product?.flash_sale_percent}
              id={product?.id}
              navigation={navigation}
              // style={}
            />
          </View>,
        ])}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 10,
    flex: 1,
    marginTop: "5%",
    marginBottom: "5%",
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: "3%",
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "5%",
    flex: 1,
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
    // maxWidth: "50%",
    width: "48%",
    textAlign: "center",
  },
});
