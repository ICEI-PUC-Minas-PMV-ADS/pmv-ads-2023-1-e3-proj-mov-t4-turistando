import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Card } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});

const Lojas = () => {

 return (
    <View style={styles.container}>
       <View style={{flex:1, fontWeight: 'bold', alignItems:'center', justifyContent:'center'}}> 
      <Text> Lojas </Text>
    </View>

      <Card>
      <Card.Cover source={require('../assets/turistando.png')} />
      </Card>
       <Card>
          <Card.Content>
            <Text variant="titleLarge">Farmacia</Text>
            <Text variant="bodyMedium">Farmacia nome , local, preço $$$ </Text>
          </Card.Content>
          </Card>

      <Card>
      <Card.Cover source={require('../assets/turistando.png')} />
      </Card>
       <Card>
          <Card.Content>
            <Text variant="titleLarge">Supermercado</Text>
            <Text variant="bodyMedium"> nome, local, preço $$$.</Text>
          </Card.Content>
          </Card>

      <Card>
      <Card.Cover source={require('../assets/turistando.png')} />
      </Card>
       <Card>
          <Card.Content>
            <Text variant="titleLarge">Loja Roupas</Text>
            <Text variant="bodyMedium">Roupas nome , local, preço $$$.</Text>
          </Card.Content>
          </Card>

    </View>
  );
};

export default Lojas;