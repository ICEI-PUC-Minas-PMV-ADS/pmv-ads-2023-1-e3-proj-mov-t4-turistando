import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const Cards = () => (
    

  <ScrollView style={styles.espacamento}>
    <Card onPress={() => {}} style={styles.card}>
      <Card.Title
        title="Pontos Turisticos"
        left={(props) => (
          <Avatar.Icon
            color="white"
            style={styles.cardAvatar}
            {...props}
            icon="airballoon-outline"
          />
        )}
      />
    </Card>
    <Card onPress={() => {}} style={styles.card}>
      <Card.Title
        title="Onde Dormir"
        left={(props) => (
          <Avatar.Icon
            color="white"
            style={styles.cardAvatar}
            {...props}
            icon="bed-outline"
          />
        )}
      />
    </Card>
    <Card onPress={() => {}} style={styles.card}>
      <Card.Title
        title="Onde Comer"
        left={(props) => (
          <Avatar.Icon
            color="white"
            style={styles.cardAvatar}
            {...props}
            icon="silverware-fork-knife"
          />
        )}
      />
    </Card>
    <Card onPress={() => {}} style={styles.card}>
      <Card.Title
        title="Lojas"
        left={(props) => (
          <Avatar.Icon
            color="white"
            style={styles.cardAvatar}
            {...props}
            icon="shopping-outline"
          />
        )}
      />
    </Card>
    <Card onPress={() => {}} style={styles.card}>
      <Card.Title
        title="Serviços Publicos"
        left={(props) => (
          <Avatar.Icon
            {...props}
            color="white"
            style={styles.cardAvatar}
            icon="account-search-outline"
          />
        )}
      />
    </Card>
    
    
  </ScrollView>
);

const styles = StyleSheet.create({
  espacamento: {
    flex: 1,
    marginTop: 10,
  },

  card: {
    backgroundColor: '#6CBECD',
    margin: 10,
    font: 'bold',
  },
  cardAvatar: {
    backgroundColor: '#387287',
  },
});

export default Cards;