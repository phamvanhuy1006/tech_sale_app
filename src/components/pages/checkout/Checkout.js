import {
	Text,
	View,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import {OrderLine} from "./OrderLine";

function Checkout() {
	const obj = {
		name: 'shoe',
		store: 'store_name',
		image: require('../../../assets/cr7.jpeg'),
		amountOfProduct: 5,
		pricePerProduct: 20000
	}
	return (
		<SafeAreaView style={{width: '100%', height: '100%'}}>
			<ScrollView style={styles.container}>
				<View style={styles.shippingAddress}>
					<Text style={styles.titleShippingAddress}>Shipping address</Text>
					<View style={styles.detail}>
						<View style={styles.address}>
							<Text style={styles.txtAddress}>My Dinh, Nam Tu Liem, Ha Noi dasd sdw sds ewe sd sdsss ss dsds d
								sdsd </Text>
						</View>
						<View style={styles.detailAddress}>
							<Text>abc, toa nha a, alo alo</Text>
						</View>
					</View>
					
					<View style={styles.optionsAddress}>
						<TouchableOpacity style={styles.btnChangeAddress}>
							<Text style={styles.txtChangeAddress}>Change</Text>
						</TouchableOpacity>
					</View>
				</View>
				
				<View style={styles.orderLines}>
					<OrderLine {...obj}/>
					<OrderLine {...obj}/>
					<OrderLine {...obj}/>
				</View>
				
				<View style={styles.bottom}>
					<Text style={styles.totalTxt}>Total: 100000</Text>
					<TouchableOpacity
						style={styles.checkoutBtn}
						activeOpacity="0.5"
					>
						<Text style={styles.checkoutTxt}>Confirm and Pay</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 5,
		paddingRight: 5,
		marginTop: 5,
		width: '100%',
		height: 400,
	},
	shippingAddress: {
		display: 'flex',
		flexDirection: 'column',
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		borderStyle: 'solid',
		borderColor: '#2529c5',
		width: '100%',
		height: 200,
		borderWidth: 1,
		marginTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#ffffff'
	},
	titleShippingAddress: {
		fontSize: 20,
		fontWeight: "bold",
	},
	detail: {
		marginTop: 20,
		display: "flex",
		flexDirection: 'column',
		alignItems: "flex-start",
		justifyContent: "center",
	},
	address: {
		width: 350,
		height: 40,
	},
	txtAddress: {
		fontWeight: "bold",
	},
	detailAddress: {
		width: 350,
		height: 20,
	},
	optionsAddress: {
		marginTop: 5
	},
	btnChangeAddress: {
		width: 100,
		height: 30,
		backgroundColor: 'green',
		borderRadius: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	txtChangeAddress: {
		color: 'white',
		fontSize: 15,
		fontWeight: "bold",
	},
	orderLines: {
		marginTop: 10,
		marginBottom: 10
	},
	bottom: {
		height: 50,
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		backgroundColor: "#2fff00",
		padding: 5,
		
	},
	totalTxt: {
		fontWeight: "bold",
		fontSize: 15
	},
	checkoutTxt: {
		fontWeight: "bold",
		fontSize: 15
	},
	checkoutBtn: {
		backgroundColor: "#ffd400",
		width: 150,
		height: 40,
		borderRadius: 10000,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 10,
	}
});

export {Checkout}