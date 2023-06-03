import * as React from 'react';
import {ScrollView } from 'react-native';

import Cabecalho from '../../components/Cabecalho';
import BodyPages from '../../components/BodyEventos';

import {useNavigation} from '@react-navigation/native';


const Supermercado = () => {

  const navigation = useNavigation();
  
  return (

    <>
    <Cabecalho 
    title={'Lojas'}
    goBack= {() => navigation.goBack()}
    /> 

<ScrollView>
    <BodyPages
           foto = {require ('../../assets/img/supermercado.jpg')}
           nome = {'Supermercado'} 
           texto = {'Encontre tudo o que você precisa em um só lugar! Nosso supermercado oferece uma ampla variedade de alimentos frescos, produtos de mercearia, itens de cuidados pessoais e muito mais. Com preços competitivos e um ambiente acolhedor, estamos aqui para tornar suas compras diárias rápidas, convenientes e agradáveis.'} 
           botao = {'Como Chegar'}
           rota = {() => navigation.navigate ('')}   
    />

</ScrollView>
    
    </>
  );

};

export default Supermercado;