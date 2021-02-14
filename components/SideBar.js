import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import {DrawerNavigatorItems} from 'react-navigation-drawer'
import {Ionicons} from '@expo/vector-icons'

export default function Sidebar (props) {
    return (
        <ScrollView>
            <Image source={require('../assets/perfil.png')} style={styles.profile} />

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
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
    }
})
