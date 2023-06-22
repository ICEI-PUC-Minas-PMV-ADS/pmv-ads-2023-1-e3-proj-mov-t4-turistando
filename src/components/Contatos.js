import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';

const Contatos = ({titulo, subtitulo, icone}) => (
  
  <Card.Title style={styles.texto}
    title = {titulo}
    subtitle = {subtitulo}
    left={(props) => <Avatar.Icon style={styles.icone} {...props} icon = {icone} />}
  />
);

const styles = StyleSheet.create({
  
  texto: {
    marginTop: 15,
    width: 450, 
    height: 100,
       
  },

  icone: {
    width: 50,
    height: 100,
    backgroundColor: 'purple',
    color: 'white',

  },

  
});

export default Contatos;