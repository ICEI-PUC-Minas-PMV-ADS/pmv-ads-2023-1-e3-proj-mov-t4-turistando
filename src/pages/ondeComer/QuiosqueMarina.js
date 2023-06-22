import * as React from 'react';
import {ScrollView } from 'react-native';

import Cabecalho from '../../components/Cabecalho';
import BodyComer from '../../components/BodyEventos';

import {useNavigation} from '@react-navigation/native';

const Quiosque = () => {

  const navigation = useNavigation();
  
  return (

    <>
    <Cabecalho 
    title={'Onde Comer'}
    goBack= {() => navigation.goBack()}
    /> 

<ScrollView>
    <BodyComer
           foto = {{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/86a5bb650f25eda678db143d5b4aa79a'}}
           nome = {'Quiosque Marina'} 
           texto = {'A atmosfera descontraída e acolhedora do quiosque Marina é perfeita para relaxar e descontrair. Aproveite o cenário paradisíaco, sinta a brisa do mar e deixe-se levar pelo ritmo tranquilo da praia enquanto desfruta de momentos especiais com amigos e familiares. Com um serviço amigável e uma localização privilegiada, o quiosque Marina é o local ideal para desfrutar de uma pausa revigorante à beira-mar. Venha nos visitar e permita-se aproveitar o melhor da praia com um toque de comodidade e sabor no quiosque Marina.'} 
           botao = {'Agendamento'}   
           rota = {() => navigation.navigate ('Agendamento')}  
    />

</ScrollView>
    
    </>
  );

};

export default Quiosque;