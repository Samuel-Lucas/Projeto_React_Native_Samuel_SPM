import React from 'react'
import Home from './Home'
import {View, Text} from 'react-native'
import Inicio from '../components/Inicio'
import Login from '../components/Login'

export const profileScreen = ({navigation}) => 
    <Home navigation={navigation} name="Perfil">
       <Inicio />
    </Home>

export const loginScreen = ({navigation}) => 
    <Home navigation={navigation} name="Login">
        <Login />
    </Home>

export const productScreen = ({navigation}) => 
    <Home navigation={navigation} name="Produtos">
        <View><Text>Lista de produtos</Text></View>
    </Home>