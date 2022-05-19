import {
	Text,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	View
} from 'react-native'
import {Icon} from 'react-native-elements';

const AddressLine = () => {
	return (
		<View style={styles.container}>
			<View style={styles.detail}>
				<View style={styles.address}>
					<Text style={styles.txtAddress}>My Dinh, Nam Tu Liem, Ha Noi dasd sdw sds ewe sd sdsss ss dsds d sdsd </Text>
				</View>
				<View style={styles.detailAddress}>
					<Text>abc, toa nha a, alo alo</Text>
				</View>
			</View>
			
			<View style={styles.options}>
				<View>
					<TouchableOpacity
					style={styles.btnSelect}
					>
						<Text style={styles.btnTxt}>Select</Text>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity
						style={styles.btnDelete}
					>
						<Text style={styles.btnTxt}>Delete</Text>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity
						style={styles.btnEdit}
					>
						<Text style={styles.btnTxt}>Edit</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		borderStyle: 'dotted',
		borderColor: '#2529c5',
		width: '100%',
		height: 120,
		borderWidth: 1,
		marginTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#ffffff'
	},
	detail: {
		display: "flex",
		flexDirection: 'column',
		alignItems: "flex-start",
		justifyContent: "center",
	},
	address: {
		width: 350,
		height: 20,
	},
	txtAddress: {
		fontWeight: "bold",
	},
	detailAddress: {
		width: 350,
		height: 20,
	},
	options: {
		width: '100%',
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginTop: 10,
	},
	btnSelect: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#307dc3',
		width: 70,
		height: 30,
		borderRadius: 30,
	},
	btnDelete: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#f00',
		width: 70,
		height: 30,
		borderRadius: 30,
	},
	btnEdit: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#27fb00',
		width: 70,
		height: 30,
		borderRadius: 30,
	},
	btnTxt: {
		fontWeight: "bold",
		color: '#fff'
	}
})

export {AddressLine}
