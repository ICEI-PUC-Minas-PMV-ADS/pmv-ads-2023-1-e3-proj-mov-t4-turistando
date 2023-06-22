import * as React from 'react';
import {ScrollView } from 'react-native';

import Cabecalho from '../../components/Cabecalho';
import BodyPages from '../../components/BodyEventos';

import {useNavigation} from '@react-navigation/native';


const Roupas = () => {

  const navigation = useNavigation();
  
  return (

    <>
    <Cabecalho 
    title={'Lojas'}
    goBack= {() => navigation.goBack()}
    /> 

<ScrollView>
    <BodyPages
           foto = {require ('../../assets/img/roupas.jpg')}
           nome = {'Loja de Roupas'} 
           texto = {'Descubra o seu estilo pessoal em nossa loja de roupas elegante e moderna. Oferecemos uma seleção cuidadosamente curada de peças de vestuário para homens, mulheres e crianças, que combinam qualidade, conforto e estilo. Explore nossas coleções de roupas da moda, desde itens casuais até opções sofisticadas para ocasiões especiais. Nossos atendentes experientes estão prontos para ajudá-lo a encontrar o visual perfeito que se adapte ao seu gosto e preferências. Seja para um novo guarda-roupa completo ou para adicionar peças-chave ao seu estilo atual, estamos aqui para tornar sua experiência de compra agradável e satisfatória.'} 
           botao = {'Como Chegar'}
           rota = {() => navigation.navigate ('')}   
    />

</ScrollView>
    
    </>
  );

};

export default Roupas;