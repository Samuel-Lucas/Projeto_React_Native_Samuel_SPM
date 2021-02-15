import React from 'react'
import {View, Text, Image} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'

import produtos from '../data/produtos'

export default props => {
   
    return (
        
        produtos.map(produto =>
            <Card key={produto.id}>
                <Card.Title title="Card Title" />
                <Card.Content>
                    <Title>{produto.descricao}</Title>
                    <Paragraph>{produto.preco}</Paragraph>
                </Card.Content>
                
                <Card.Cover source={require(`../${produto.imagem}`)} />
  
                <Card.Actions>
                    <Button>Comprar</Button>
                </Card.Actions>
            </Card>
        )
    )   
}