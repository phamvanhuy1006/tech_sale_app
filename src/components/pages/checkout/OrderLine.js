import {
	Text,
	View,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Image,
} from 'react-native';

const OrderLine = ({image, name, amountOfProduct, store, pricePerProduct}) => {
	return (
		<View style={styles.container}>
			<View>
				<Image style={styles.image} source={image}/>
			</View>
			
			<View style={styles.details}>
				<View>
					<Text style={styles.name}>{name}</Text>
				</View>
				<View>
					<Text style={styles.store}>{store}</Text>
				</View>
				<View style={styles.quantityAndPrice}>
					<Text style={styles.price}>Giá: {pricePerProduct}</Text>
					<Text style={styles.txtQuantity}>Quantity: {amountOfProduct}</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		width: '100%',
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "flex-start",
		borderStyle: 'solid',
		borderColor: '#2529c5',
		borderWidth: 1,
		marginTop: 10,
		paddingLeft: 10,
		backgroundColor: '#ffffff',
		height: 200,
	},
	image: {
		width: 160,
		height: "80%",
		borderRadius: 10,
	},
	amountOfProduct: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-end",
		height: '70%',
	},
	details: {
		marginLeft: 5,
		width: '70%',
		height: '80%',
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-around"
	},
	name: {
		fontSize: 20,
	},
	store: {
		fontSize: 15,
		color: 'gray'
	},
	quantityAndPrice: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		width: '100%',
	},
	price: {
		fontSize: 13,
		fontWeight: "bold",
		flex: 1,
	},
	txtQuantity: {
		flex: 1,
		fontSize: 13,
		fontWeight: "bold",
		justifyContent: "center",
		alignItems: "flex-end"
	}
})

export {OrderLine}
