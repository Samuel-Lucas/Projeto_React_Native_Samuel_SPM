import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <View style={{flex: 1, backgroundColor: 'purple'}}>
                        <TouchableOpacity style={{alignItems: "flex-end", margin: 16}}
                        onPress={this.props.navigation.openDrawer}>
                            <FontAwesome name="bars" size={24} color={161924} />
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <Text style={styles.text}>
                            {this.props.name} Screen
                        </Text>

                        {this.props.children}
                        
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        felx: 1,
        backgroundColor: "#fff"
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    }
})