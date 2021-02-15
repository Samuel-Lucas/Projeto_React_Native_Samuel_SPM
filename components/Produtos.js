import React from 'react'
import {View, Text} from 'react-native'
//import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import produtos from '../data/produtos.js'

export default props => {
   
    return (
        
        produtos.map(produto => 
            <View key={produto.id}>
                <Text>{produto.id}</Text>
                <Text>{produto.nome}</Text>
                <Text>{produto.preco}</Text>
            </View>  
        )
    )
}