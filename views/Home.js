import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default class Home extends React.Component {
    render() {
        return (
            <ScrollView style={{border: "1px solid blue", minHeight: "100%"}}>
                <View style={styles.container}>
                    <SafeAreaView style={{flex: 1}}>
                        <View style={{flex: 1, background: 'linear-gradient(rgb(173, 13, 173), rgb(39, 39, 187))'}}>
                            <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", margin: 16}}
                            onPress={this.props.navigation.openDrawer}>
                                <Text style={styles.logo}>Games <Text style={{fontStyle: "italic"}}>Shelter</Text></Text>
                                <FontAwesome name="bars" size={24} color={161924} />
                            </TouchableOpacity>
                        </View>

                        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 20}}>
                                {this.props.name}
                            </Text>
                            
                            {this.props.children}
                            
                        </View>
                    </SafeAreaView>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.copyright}>
                        &copy; Games Shelter
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    },
    copyright: {
        textAlign: "center",
        fontSize: 20,
        textShadow: "2px 2px black",
        color: "#fff"
    },
    footer: {
        backgroundColor: "#4E0DD0",
        marginTop: 110,
        padding: 50,
        height: 50,
    },
    logo: {
        color: "#fff",
        fontSize: 18,
    }
})