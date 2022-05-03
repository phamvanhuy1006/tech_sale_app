import React from "react";
import {StyleSheet, View, Text, Button, TextInput } from "react-native";

function Register() {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 25, fontWeight:'600', marginBottom: '5%', color:'#ff3300'}}>Register</Text>

            <TextInput
                style={styles.input}
                placeholder="User Name"
            />

            <TextInput
                style={styles.input}
                placeholder="Email Address"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
            />

            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
            />

            <View style={styles.register}>
                <Button
                    color="#339900"
                    title="Register"
                />
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
        // border: 'solid #000 1px',
        borderRadius: 10,
        marginBottom: '2%',
        paddingLeft: 0,
    },

    register: {
        width: '60%',
        marginTop: '2%',
    }
});

export { Register }
