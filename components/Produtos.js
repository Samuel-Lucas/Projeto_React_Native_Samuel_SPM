import React from 'react'
import { Button } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'

import produtos from '../data/produtos'

export default props => {
   
    return (
        
        produtos.map(produto =>
            <Card key={produto.id} style={{width: "80%", marginTop: 10, marginBottom: 10}}>
                <Card.Content>
                    <Title>{produto.descricao}</Title>
                    <Paragraph style={{color: "red", fontSize: 15}}>{produto.preco}</Paragraph>
                </Card.Content>
                
                <Card.Cover source={require(`../${produto.imagem}`)} />
  
                <Card.Actions>
                    <Button title="Comprar" color="#00e600" />
                </Card.Actions>
            </Card>
        )
    )   
}