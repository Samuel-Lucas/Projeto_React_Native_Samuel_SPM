import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import {DrawerNavigatorItems} from 'react-navigation-drawer'

export default function Sidebar (props) {
    return (
        <ScrollView>
            <View style={styles.user}>
                <Image source={require('../assets/perfil.png')} style={styles.profile} />
                <Text style={styles.name}>Samuel Lucas</Text>
            </View>

            <View>
                <DrawerNavigatorItems {...props} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    user: {
        flex: 1,
        padding: 20
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5
    }
})
