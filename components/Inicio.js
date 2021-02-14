import React from 'react'
import {View, Text, StyleSheet, ImageBackground} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const { s, c } = bootstrapStyleSheet

export default function Inicio() {

    return (
        <View>
            <Text style={styles.title}>Seja Bem-vindo(a) à loja Games Shelter</Text>

            <View style={{flex: 1, alignItems: "center", justifyContent: "center", marginTop: 20}}>
                <ImageBackground source={require('../assets/index_img.jpg')} style={styles.img}>
                    <Text style={styles.text}>
                        A loja que presta o melhor serviço
                    </Text>
                </ImageBackground>

                <View style={[s.btn, s.btnPrimary, s.mt4]}>
                    <Text style={[s.btnText, s.btnPrimaryText]}>Confira nossos produtos</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 500,
        marginTop: 50,
    },
    img: {
        width: 270,
        height: 200,
    },
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    }
})