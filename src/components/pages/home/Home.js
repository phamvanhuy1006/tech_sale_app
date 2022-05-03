import { View, StyleSheet, ScrollView } from 'react-native';
import { ProductCategori } from './ProductCategori';
import { FlashSale } from './FlashSale';
import { TopProduct } from './TopProduct';
import { BottomHome } from './BottomHome';

function Home ({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ProductCategori />
      <FlashSale />
      <TopProduct navigation={navigation} />
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

export { Home }
