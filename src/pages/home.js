import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Container from '../components/container';
import Cards from '../components/cardsHome';
import Banner from '../components/banner';


const Home = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Banner />
      <Cards />
    </Container>
  );
};
export default Home;
