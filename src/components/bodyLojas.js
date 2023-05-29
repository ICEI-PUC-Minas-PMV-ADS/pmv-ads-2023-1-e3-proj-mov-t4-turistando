import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {Card, Text} from 'react-native-paper';


const Body = () => (

  <ScrollView>


  <Card>
    <Card.Cover style={styles.img} source={require ('../assets/farmacia.jpg')} />

    <Card.Content style={styles.text}>
      <Text style={styles.titulo} variant="titleLarge"> Farmácia {' '} </Text>
      <Text style={styles.corpo} variant="bodyMedium"> Uma farmácia confiável, com uma ampla variedade de medicamentos, produtos de cuidados pessoais e serviços convenientes para atender às suas necessidades de saúde e bem-estar. </Text>
    </Card.Content>

    <Card.Cover
      style={styles.img} source={require ('../assets/roupas.jpg')} />

    <Card.Content style={styles.text}>
      <Text style={styles.titulo} variant="titleLarge"> Loja de Roupas {' '} </Text>
      <Text style={styles.corpo} variant="bodyMedium"> Descubra a moda dos seus sonhos em nossa loja de roupas, onde estilo e qualidade se encontram. Encontre as últimas tendências e peças exclusivas para expressar sua individualidade com confiança. </Text>  
        </Card.Content>

    <Card.Cover
      style={styles.img} source={require ('../assets/supermercado.jpg')}/>

    <Card.Content style={styles.text}>
     <Text style={styles.titulo} variant="titleLarge"> Supermercado {' '}
      </Text>
      <Text style={styles.corpo} variant="bodyMedium"> Seu destino para todas as suas necessidades de compras diárias. Produtos frescos, mercearia e muito mais, tudo em um só lugar.
      </Text>
    </Card.Content>

    <Card.Cover
      style={styles.img}  source={require ('../assets/lembrancas.jpg')}/>

    <Card.Content style={styles.text}>
      <Text style={styles.titulo} variant="titleLarge">
        Loja Lembranças{' '}
      </Text>
      <Text style={styles.corpo} variant="bodyMedium">
      Lembranças únicas para momentos especiais.
      </Text>
    </Card.Content>
    
  </Card>

  </ScrollView>

);

const styles = StyleSheet.create({
   img: {
    width: 400,
    //height: 'flex',
  }, 

  titulo: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Copperplate, Papyrus, fantasy',
  },

  corpo: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 15,
    justifyContent: 'space-evenly',
  },
  
});


export default Body;