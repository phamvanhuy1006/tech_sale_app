import React from "react";

import { TextInput } from "react-native-web";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";

export default function Login({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: '25px', fontWeight:'600', marginBottom: '5%', color:'#ff3300'}}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email Address"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
            />

            <View style={styles.login}>
                <Button
                    color="#339900"
                    title="Login"
                />
            </View>

            {/* <Text
                style={{color: '#fff', fontSize:'16px', marginTop: '2%'}}
            >
                Forgot Password?
            </Text> */}

            <Button
                title="Forgot Password"
                onPress ={() => {
                    navigation.navigate('ForgotPass')
                }}
            />

            <View>
                <Text style={styles.linkregister} >Didn't have an account? <a href="#" style={{textDecoration: 'none', color:'#fff'}}>Register Now</a></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#3399cc',
      alignItems: 'center',
      justifyContent: 'center',
    },

    input: {
        width: '80%',
        height: '7%',
        border: 'solid #000 1px',
        borderRadius: '10px',
        marginBottom: '2%',
        paddingLeft: '10px',
    },

    login: {
        width: '60%',
        backgroundColor: '#339900',
        marginTop : '2%',
    },

    linkregister: {
        display: 'flex',
        fontSize: '15px',
        color:"#ccc",
        marginTop: '2%',
    },

    link: {
        textDecoration: 'none',
    }
});


