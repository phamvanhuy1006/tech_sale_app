import { View, StyleSheet, ScrollView } from 'react-native';
import ProductCategori from './ProductCategori';
import FlashSale from './FlashSale';
import TopProduct from './TopProduct';
import BottomHome from './BottomHome';
import Slide from './Slide';

export default function Home ({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Slide />
      <ProductCategori />
      <FlashSale />
      <TopProduct />
      <BottomHome />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccccff'
  }
});
