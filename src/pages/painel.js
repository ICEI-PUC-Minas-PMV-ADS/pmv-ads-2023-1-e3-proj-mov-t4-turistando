import React, { useEffect, useState } from 'react';
import { List } from 'react-native-paper';
import { FlatList, StyleSheet } from 'react-native';

import { useNavigation, useIsFocused } from '@react-navigation/native';


import Container from '../components/container';
import { getUser } from '../services/user.account.services';

const Painel = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser().then((dados) => {
      setUser(dados);
    });
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <List.Item
      style={styles.item}
      title={'Olá , ' + item.name + '!'}
      onPress={() => navigation.navigate('Perfil', { item })}
    />
  );

  return (
    <Container>
      <FlatList
        data={user}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#aaa',
    borderRadius: 15,
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 32,
  },
});

export default Painel;