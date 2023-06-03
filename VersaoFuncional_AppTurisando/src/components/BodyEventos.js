import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {Card, Text, Button} from 'react-native-paper';


const BodyEventos = ({foto, nome, texto, botao, rota}) => (

  <ScrollView> 


  <Card>
    <Card.Cover style={styles.img} source={foto} />

    <Card.Content style={styles.text}>
      <Text style={styles.titulo} variant="titleLarge"> {nome}  </Text>
      <Text style={styles.corpo} variant="bodyMedium">  {texto}  </Text>
    </Card.Content>

    <Button style={styles.button} icon="magnify-scan" mode="contained" onPress={rota}> {botao} </Button>

    
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
    
  },

  corpo: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 15,
    textAlign: 'justify',
    justifyContent: 'space-evenly',
  },

  button: {
    backgroundColor: 'purple',
    marginHorizontal:40,
    marginBottom:20,
    padding: 5, 
  },
  
});


export default BodyEventos;
