import * as React from 'react';
import {ScrollView } from 'react-native';

import Cabecalho from '../../components/Cabecalho'; 
import BodyEventos from '../../components/BodyEventos';

import {useNavigation} from '@react-navigation/native';

const Teatro = () => {

  const navigation = useNavigation();
  
  return (

    <>
    <Cabecalho 
    title={'Teatro'}
    goBack= {() => navigation.goBack()}    
    /> 

<ScrollView>
    <BodyEventos
           foto = {{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a894ab3981a6263f2e863ca77223c25a'}}
           nome = {'Peça: Auto da Compadecida'}
           texto =  {`O Auto da Compadecida, peça teatral de Ariano Suassuna, é uma das obras deste gênero mais conhecidas no Brasil. Tanto que acabou se tornando minissérie e filme.

Cidade: Itabirito
Data: 07/05/23
Horário: 20 horas
Local: Teatro Municipal de Itabirito
Repertório: drama
Entrada: 10 reais`}                               
           botao = {'Prestigie-nos'}
    />

</ScrollView>
    
    </>
  );

};

export default Teatro;