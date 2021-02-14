import React from 'react'
import Home from './Home'
import {View, Text} from 'react-native'

export const profileScreen = ({navigation}) => 
    <Home navigation={navigation} name="Perfil">
        <View><Text>Tela Inicial</Text></View>
    </Home>

export const loginScreen = ({navigation}) => <Home navigation={navigation} name="Login" />

export const productScreen = ({navigation}) => 
    <Home navigation={navigation} name="Produtos">
        <View><Text>Lista de produtos</Text></View>
    </Home>