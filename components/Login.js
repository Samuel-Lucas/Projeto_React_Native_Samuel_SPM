import React from 'react'
import {View, Text, TextInput, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const { s, c } = bootstrapStyleSheet

export default function Login() {

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View>
                <Text style={[s.textCenter, styles.login_title]}>
                    Login
                </Text>
            </View>

            <View style={styles.login_form}>
                <TextInput style={styles.login_input} placeholder='Usuário:' />
                <TextInput style={styles.login_input} placeholder='Senha:' secureTextEntry={true} />

                <TouchableOpacity style={styles.login_button}>
                    <Text style={styles.login_buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        padding: 20,
        marginTop: 120,
        borderRadius: 15,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
    login_form: {
        width: "80%",
        justifyContent: "center",
    },
    login_input: {
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15,
        marginLeft: 10,
        borderRadius: 10,
    },
    login_button: {
        padding: 12,
        backgroundColor: "#005ce6",
        alignSelf: "center",
        borderRadius: 5,
    },
    login_buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff",
    },
    login_title: {
        fontSize: 20,
        color: '#fff',
        marginTop: 5,
        marginBottom: 10,
    }
})