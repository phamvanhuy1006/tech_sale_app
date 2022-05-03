import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function Welcome ({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:24, fontWeight:'600', color:'#fff'}}>Welcome!</Text>

      <View style={styles.signin}>
        <Button
          color="#339900"
          title="Sign In"
          onPress ={() => {
            navigation.navigate('Login')
          }}
      />
      </View>
      <View style={styles.signin}>
        <Button
            color = '#ff33cc'
            title="Sign Up"
            onPress ={() => {
              navigation.navigate('Register')
            }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // width: '100%',
      backgroundColor: '#9966ff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    signin: {
        width: '60%',
        backgroundColor: '#339900',
        marginTop : '2%',
    }
});

export { Welcome }