import * as React from 'react';
import {ScrollView } from 'react-native';

import Cabecalho from '../components/cabecalho';
import BodyPages from '../components/bodyPages';

import {useNavigation} from '@react-navigation/native';


const Lembrancas = () => {

  const navigation = useNavigation();
  
  return (

    <>
    <Cabecalho 
    title={'Lojas'}
    goBack= {() => navigation.goBack()}
    /> 

<ScrollView>
    <BodyPages
           foto = {require ('../assets/lembrancas.jpg')}
           nome = {'Loja de Lembranças'} 
           texto = {'Leve para casa memórias especiais da sua visita em nossa encantadora loja de lembranças. Oferecemos uma variedade de itens exclusivos que capturam a essência do local, desde souvenirs temáticos até artesanatos e presentes únicos. Encontre lembranças significativas para celebrar momentos especiais e compartilhar o espírito do lugar com seus entes queridos.'} 
           botao = {'Como Chegar'}
           rota = {() => navigation.navigate ('')}   
    />

</ScrollView>
    
    </>
  );

};

export default Lembrancas;