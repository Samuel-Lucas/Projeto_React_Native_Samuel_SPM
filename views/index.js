import React from 'react'
import Home from './Home'
import Inicio from '../components/Inicio'
import Login from '../components/Login'
import Produtos from '../components/Produtos'

export const profileScreen = ({navigation}) => 
    <Home navigation={navigation} name="Home">
       <Inicio navigation={navigation} />
    </Home>

export const loginScreen = ({navigation}) => 
    <Home navigation={navigation} name="Iniciar Sessão">
        <Login />
    </Home>

export const productScreen = ({navigation}) => 
    <Home navigation={navigation} name="Produtos">
        <Produtos />
    </Home>