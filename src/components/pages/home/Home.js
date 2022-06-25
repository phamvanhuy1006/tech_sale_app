import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ProductCategori } from "./ProductCategori";
import { FlashSale } from "./FlashSale";
import { TopProduct } from "./TopProduct";
import { BottomHome } from "./BottomHome";
import { Show } from "../user/Show";
import { Edit } from "../user/Edit";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ShowProduct } from "~/screen/product";
import { ProductList } from "./Product/ProductList";

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ProductCategori />
      <View style={{ marginTop: 10 }}>
        <FlashSale navigation={navigation} />
      </View>
      <TopProduct navigation={navigation} />
      <BottomHome />
    </ScrollView>
  );
}

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShowProfile"
        component={Show}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={Edit}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccccff",
  },
});

export { HomeNavigation };
