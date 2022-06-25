import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { ToPay } from "./ToPay";
import { WaitingForHandling } from "./WaitingForHandling";
import { ToProcess } from "./ToProcess";
import { useEffect, useState } from "react";

const Tab = createMaterialTopTabNavigator();

const OrderNavigation = ({ route }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!loading);
  }, [route.params?.carts]);

  return (
    <Tab.Navigator>
      <Tab.Screen name="ToPay" options={{ title: "Chờ Xác Nhận" }} component={ToPay} />
      <Tab.Screen name="Waiting For Handling" options={{ title: "Chờ lấy hàng" }} component={WaitingForHandling} />
      <Tab.Screen name="To Process" options={{ title: "Đang giao" }} component={ToProcess} />
    </Tab.Navigator>
  );
};

export { OrderNavigation };
