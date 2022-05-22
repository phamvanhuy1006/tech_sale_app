import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Show } from './Show'

const Stack = createNativeStackNavigator()

const Profile = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="EditProfile" component={Show} />
      </Stack.Navigator>
  )
}

export { Profile }