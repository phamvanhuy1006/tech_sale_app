import * as React from "react";
import { Searchbar } from "react-native-paper";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { request } from "~/lib";
import { useEffect, useState } from "react";
import { Divider } from "@rneui/base";

const SearchProduct = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [products, setProducts] = useState();
  const onChangeSearch = (query) => setSearchQuery(query);
  useEffect(() => {
    if (searchQuery !== "") {
      request
        .get("/api/product/param?freeText=" + searchQuery)
        .then((res) => setProducts(res.data.data));
    }
  }, [searchQuery]);
  console.log(products);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={{ flex: 10 }}>
        <ScrollView>
          {products?.map((product, index) => {
            return (
              <View>
                <TouchableOpacity
                  key={index}
                  style={{
                    flexDirection: "row",
                    marginVertical: 5,
                    alignItems: "center",
                  }}
                  onPress={() => {
                    navigation.navigate("cartnavigation", {
                      screen: "ShowProduct",
                      params: {
                        productId: product.id,
                      },
                    });
                  }}
                >
                  <View>
                    <Image
                      style={{
                        width: 160,
                        height: 50,
                        marginHorizontal: 5,
                        borderRadius: 10,
                        backgroundColor: "red",
                      }}
                      source={{ uri: product?.images }}
                    />
                  </View>
                  <Text>{product?.name}</Text>
                </TouchableOpacity>
                <Divider
                  orientation="horizontal"
                  width={2}
                  style={{ marginTop: 5 }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchProduct;
