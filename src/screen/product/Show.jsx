import { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@rneui/themed";
import { request } from "~/lib";
import { Rating } from "react-native-ratings";
import { red, black } from "~/lib/variable";
import { Divider } from "react-native-elements";
import { salePrice, round } from "~/lib/ultis";
import { addToCart } from "~/lib/ultis";

export const ShowProduct = ({ route, navigation }) => {
  const [product, setProduct] = useState();
  useEffect(() => {
    try {
      request.get("/api/product/" + route.params?.productId).then((res) => {
        setProduct(res.data.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, [route.params?.productId]);

  let rate = 0;

  if (product?.rate) {
    rate = round(product?.rate);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 12 }}>
        <ScrollView>
          <View style={styles.image}>
            <ImageBackground
              source={{ uri: product?.images }}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={styles.detail}>
            <View style={{ backgroundColor: "none" }}>
              <View style={styles.title}>
                <Text style={styles.productName}>{product?.name}</Text>
                <View style={styles.productSale}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: red[700],
                    }}
                  >
                    {product?.flash_sale_percent}%
                  </Text>
                  <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                    OFF
                  </Text>
                </View>
              </View>

              <View>
                <Text style={styles.productSalePrice}>
                  ₫{salePrice(product?.price, product?.flash_sale_percent)}
                </Text>
                <Text style={styles.productPrice}>₫{product?.price}</Text>
              </View>

              <View style={styles.productStatus}>
                <View style={styles.productRating}>
                  <Rating imageSize={15} readonly startingValue={rate} />
                  <Text>{rate}</Text>
                </View>

                <View style={styles.productStock}>
                  <Text>{product?.stock} Đã bán</Text>
                </View>

                <View style={styles.productHeart}>
                  <Icon name="heart-o" type="font-awesome" />
                </View>
              </View>
              <View style={styles.productStatus}>
                <View style={styles.productEndow}>
                  <View style={styles.productEndowIcon}>
                    <Icon
                      size={10}
                      name="arrow-return-left"
                      type="fontisto"
                      color={red[700]}
                    />
                  </View>
                  <Text style={styles.productEndowText}>
                    Miễn phí giao hàng
                  </Text>
                </View>

                <View style={styles.productEndow}>
                  <View style={styles.productEndowIcon}>
                    <Icon
                      size={10}
                      name="local-shipping"
                      type="MaterialIcons"
                      color={red[700]}
                    />
                  </View>
                  <Text style={styles.productEndowText}>Chính hãng 100%</Text>
                </View>

                <View style={styles.productEndow}>
                  <View style={styles.productEndowIcon}>
                    <Icon
                      size={10}
                      name="shield-check"
                      type="material-community"
                      color={red[700]}
                    />
                  </View>
                  <Text style={styles.productEndowText}>
                    Giao hàng miễn phí
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ backgroundColor: "yellow" }}></View>
            <View style={{ backgroundColor: "red" }}></View>
          </View>
          <Divider orientation="horizontal" width={5} />

          <View style={styles.voucher}>
            <Text style={{ flex: 1 }}>Mã giảm giá cho shop</Text>
            <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
              <Text>Giảm 20k</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ flex: 1, padding: 10, alignItems: "center" }}
        >
          <Icon color={red[700]} size={30} name="wechat" type="font-awesome" />
          <Text style={styles.footerText}>Chat ngay</Text>
        </TouchableOpacity>
        <Divider orientation="vertical" width={2} />

        <TouchableOpacity
          style={{ flex: 1.5, alignContent: "center" }}
          onPress={() => {
            addToCart(product?.id, navigation);
          }}
        >
          <Icon
            color={red[700]}
            size={30}
            name="cart-arrow-down"
            type="font-awesome"
          />
          <Text style={styles.footerText}>Thêm vào Giỏ hàng</Text>
        </TouchableOpacity>
        <Divider orientation="vertical" width={2} />

        <TouchableOpacity
          style={{
            flex: 2,
            alignItems: "center",
            backgroundColor: red[700],
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "#ffffff" }}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 400,
  },
  detail: {
    padding: 10,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
    marginBottom: 3,
  },
  productName: {
    flex: 9,
    fontSize: 20,
  },
  productSale: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 15,
  },
  voucher: {
    flexDirection: "row",
    padding: 10,
  },
  productStatus: {
    flexDirection: "row",
  },
  productStock: {
    flex: 1,
    padding: 4,
  },
  productRating: {
    flex: 1,
    borderRightColor: "red",
    borderRightWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  productHeart: {
    flex: 1,
    alignItems: "flex-end",
  },
  productEndow: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  productEndowText: {
    fontSize: 10,
  },
  productEndowIcon: {
    justifyContent: "center",
  },
  productSalePrice: {
    color: red[700],
  },
  productPrice: {
    color: black[100],
    textDecorationLine: "line-through",
  },
  footerText: {
    fontSize: 12,
    textAlign: "center",
  },
});
