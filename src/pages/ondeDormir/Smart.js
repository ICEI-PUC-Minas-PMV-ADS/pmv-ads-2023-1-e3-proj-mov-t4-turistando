import * as React from'react';
import {ScrollView} from 'react-native';

import Cabecalho from '../../components/Cabecalho';
import Bodyondedormir from '../../components/bodypturisticos';

import {useNavigation} from '@react-navigation/native';


const Smart= () => {

const navigation = useNavigation ();

  return (
    <>
    <Cabecalho 
    title = {'Onde Dormir'}
    goBack = {() => navigation.goBack()}
    />
    <Bodyondedormir 
    foto={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/bdcbb86142103cbcfa12a6f68daf6242'}
   }

   titulo={'Smart Charlie Frei Caneca'}
   texto={'A propriedade está a 2,1 km da Catedral Metropolitana de São Paulo e a 2,6 km do MASP São Paulo. O aeroporto mais próximo é o Aeroporto de São Paulo/Congonhas, a 13 km do Smart Charlie Frei Caneca - Soft Opening. Os casais gostam particularmente da localização — deram uma pontuação de 8,0 para uma viagem a dois.'}
   textodobotao={'Agendamento'}
   clicou={() => navigation.navigate ('Agendamento')}
   />
   </>

  );

};


export default Smart;