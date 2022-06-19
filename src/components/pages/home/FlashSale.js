import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Dimensions,
} from "react-native";
import { Product } from "./Product";
import { useEffect, useState } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { request } from "~/lib";
import { salePrice, round } from "~/lib/ultis";

const { width: screenWidth } = Dimensions.get("window");

function FlashSale({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    request
      .get("/api/product")
      .then((response) => setProducts(response.data.data));
  }, []);

  const _renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <Product
          name={item?.name}
          image={item?.images}
          salePrice={salePrice(item?.price, item?.flash_sale_percent)}
          stock={item?.stock}
          rate={round(item?.rate)}
          price={item?.price}
          salePercent={item?.flash_sale_percent}
          id={item?.id}
          navigation={navigation}
          style={{ padding: 3 }}
        />
      </View>
    );
  };

  return (
    <Carousel
      sliderWidth={screenWidth}
      sliderHeight={screenWidth}
      itemWidth={screenWidth - 60}
      data={products}
      renderItem={_renderItem}
      hasParallaxImages={true}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 50,
    overflow: "hidden",
    padding: 3,
  },
});

export { FlashSale };
