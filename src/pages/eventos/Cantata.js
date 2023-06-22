import * as React from 'react';
import {ScrollView } from 'react-native';

import Cabecalho from '../../components/Cabecalho';
import BodyEventos from '../../components/BodyEventos';

import {useNavigation} from '@react-navigation/native';
 
const Cantata = () => {

  const navigation = useNavigation();
  
  return (

    <>
    <Cabecalho 
    title={'Cantata'}
    goBack= {() => navigation.goBack()}
    /> 

<ScrollView>
    <BodyEventos
           foto = {{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/219c20a92f3e6fae213fea76118004bb'}}
           nome = {`Musical de Natal`}
           texto = {`Com a chegada de dezembro, já aumentamos nossas expectativas para mais um Musical de Natal. Neste ano, conheceremos a história de Elisa em uma emocionante viagem através do tempo. 
           
Cidade: Santa Rita Sapucaí
Data: 25/12/23
Horário: 19 horas
Local: pracinha central da cidade
Repertório: erudito e popular 
Entrada gratuita`}
           botao = {'Prestigie-nos'}   
           rota = {() => navigation.navigate ('Prestigie-nos')}  
    />

</ScrollView>
    
    </>
  );

};

export default Cantata;