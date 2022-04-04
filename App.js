import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Auth/Login';
import Welcome from './Auth/Welcome';
import Register from './Auth/Register';
import ForgotPassword from './Auth/ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Welcome'
          component={Welcome}
          options={{title:'Welcome'}}
        />

        <Stack.Screen
          name='Login'
          component={Login}
          options={{title:'Login'}}
        />

        <Stack.Screen 
          name='Register'
          component={Register}
          options={{title:'Register'}}
        />

        <Stack.Screen
          name='ForgotPass'
          component={ForgotPassword}
          options={{title:'Reset Password'}}
        />
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <ForgotPassword />
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
