import react from "react";
import { Image, TextInput, View, Button, StyleSheet } from "react-native";

function ForgotPassword() {
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/favicon.png')} style={{height:100, width:100}} />
            <TextInput
                style={styles.input}
                placeholder='UserName or Email'
            />
            <View style={{width:'60%', height:'7%', marginTop: '5%'}}>
                <Button
                    color= '#3366cc'
                    title= 'Reset Password'
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#ffcc00',
      alignItems: 'center',
      justifyContent: 'center',
    },

    input: {
        width: '80%',
        height: '7%',
        // border: 'solid #000 1px',
        borderRadius: 10,
        marginTop: 5,
        paddingLeft: 10,
    }
});

export { ForgotPassword }
