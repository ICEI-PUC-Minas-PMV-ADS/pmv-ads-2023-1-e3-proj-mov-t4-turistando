import * as React from 'react';
import {ScrollView } from 'react-native';

import Cabecalho from '../../components/Cabecalho';
import BodyEventos from '../../components/BodyEventos';
 
import {useNavigation} from '@react-navigation/native';

const Luau = () => {

  const navigation = useNavigation();
  
  return (

    <>
    <Cabecalho 
    title={'Luau'}
    goBack= {() => navigation.goBack()}
    /> 

<ScrollView>
    <BodyEventos
           foto = {{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8307271b5c6afdb5c5993b24fe3ba768'}} 
           nome = {'Luau FJU'}
           texto =  {`O “Luau FJU – Nas Ondas do Espírito” propõe a juventude uma tarde agradável com apresentações culturais, mas além disso, incentiva um ato de solidariedade, ao convidar os participantes a doar 1kg de alimento não perecível – como arroz, feijão, óleo de cozinha, café, macarrão, sal, açúcar, farinha e enlatados – para que sejam destinados a famílias em situação
de vulnerabilidade social.

Cidade: Felixlândia
Data: 20/12/23
Horário: 21 horas
Local: Câmara Municipal de Felixlândia
Entrada: 1kg de alimento não perecível`} 
           botao = {'Prestigie-nos'}
           rota = {() => navigation.navigate ('Agendamento')}      
    />

</ScrollView>
    
    </>
  );

};

export default Luau;