import React from "react";
import { useState } from "react";
import {View, Text, StyleSheet, SafeAreaView, Dimensions, ScrollView, Image} from 'react-native';

const image = [
  'https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
  'https://images.unsplash.com/photo-1506059837806-7de0cf7d4dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
  'https://images.unsplash.com/photo-1506059612708-99d6c258160e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Slide() {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          // onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {
            image.map((e, index) =>
              <Image
                key={e}
                resizeMode='stretch'
                style={styles.wrap}
                source={{uri: e}}
              />
            )
          }
        </ScrollView>
        <View style={styles.wrapDot}>
          {
            image.map((e, index) =>
              <Text>●</Text>
            )
          }

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25
  },

  wrapDot: {
    position:'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  }
})