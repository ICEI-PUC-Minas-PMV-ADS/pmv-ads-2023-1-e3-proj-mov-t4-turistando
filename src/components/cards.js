import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Card } from 'react-native-paper';


const Cards = ({ nome, rota,icon}) => (

    
  
  
    <Card onPress={rota} style={styles.card}>
      <Card.Title
        title={nome}
        left={(props) => (
          <Avatar.Icon
            color="white"
            
            style={styles.cardAvatar}
            {...props}
            icon={icon}
          />
        )}
      />
    </Card>
  
);

const styles = StyleSheet.create({
 

  card: {
    
    backgroundColor: '#9CF591',
    title:'',
    marginVertical: 10,
    padding:5,
    marginHorizontal: 5,
    font: 'bold',
  },
  cardAvatar: {
    backgroundColor: '#0F3F0a',
  },
});

export default Cards;