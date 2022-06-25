import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleDeleteOrder = async (
  productId,
  shopId,
  navigation,
  screen
) => {
  try {
    let cart = [];
    let jsonCart = await AsyncStorage.getItem("@cart", jsonCart);

    if (jsonCart) {
      cart = JSON.parse(jsonCart);
    }

    const indexShop = cart.indexOf(
      cart.find((order) => order.shop_id === shopId)
    );
    if (indexShop === -1) {
    } else {
      const order = cart[indexShop].order;
      const indexOrder = order.indexOf(
        order.find((product) => product.data.id === productId)
      );

      if (indexOrder !== -1) {
        cart[indexShop].order.splice(indexOrder, 1);
      }
      jsonCart = JSON.stringify(cart);
      await AsyncStorage.setItem("@cart", jsonCart);
      if (screen === "ToPay") {
        navigation.navigate("OrderNavigation", {
          screen: screen,
          params: {
            carts: jsonCart,
          },
        });
      } else {
        navigation.navigate("cartnavigation", {
          screen: screen,
          params: {
            carts: jsonCart,
          },
        });
      }
    }
  } catch (e) {
    // saving error
    //   Alert.alert("handleDelete bị lỗi");
  }
};
