import * as React from 'react';
import {ScrollView } from 'react-native';

import Cabecalho from '../../components/Cabecalho';
import BodyEventos from '../../components/BodyEventos';
 
import {useNavigation} from '@react-navigation/native';


const Feira = () => {

  const navigation = useNavigation();
  
  return ( 
     
    <>
    <Cabecalho 
    title={'Feira'}
    goBack= {() => navigation.goBack()}
    /> 

<ScrollView>
    <BodyEventos
           foto = {{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a718e7077cfa274d67d6346b1d71f6c6'}}
           nome = {'Feirinha da Santa Rita'}
           texto =  {`Um sábado por mês, a Feirinha Aproxima traz ainda mais vida para o Município. O evento itinerante leva para vários espaços da cidade uma mistura de cheiros, temperos e sabores, reunindo produtores e ingredientes diversos. 

Cidade: São Sebastião de Minas
Data: 31/11/23
Horário: 5 horas
Local: praça central da cidade`} 
           botao = {'Prestigie-nos'}
           rota = {() => navigation.navigate ('Agendamento')}   
    />

</ScrollView>
    
    </>
  );

};

export default Feira;