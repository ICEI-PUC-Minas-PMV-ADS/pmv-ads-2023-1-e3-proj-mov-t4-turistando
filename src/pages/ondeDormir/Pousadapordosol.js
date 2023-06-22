import * as React from 'react';
import {ScrollView} from 'react-native';


import Cabecalho from  '../../components/Cabecalho';
import Bodyondedormir from '../../components/bodypturisticos';

import {useNavigation} from '@react-navigation/native';

const Pousadapordosol= () => {

const navigation = useNavigation ();

  return (
    <>
    <Cabecalho 
    title = {'Onde Dormir'}
    goBack = {() => navigation.goBack()}
    />
    <Bodyondedormir 
    foto={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/dede698046d8b2b53635ee44eec3ff72'}
   }

   titulo={'Pousada por do Sol'}
   texto={' Todos os quartos incluem ar condicionado ou uma ventoinha de tecto, uma casa de banho privativa e um mini-bar. O buffet de pequeno-almoço na Pousada. Por do Sol inclui frutas frescas, pães e uma selecção de bebidas. Os restaurantes, quiosques e bares, que servem uma variedade de pratos e bebidas, ficam a cerca de 10 minutos a pé.Podem ser organizados passeios a cavalo e de buggy. São providenciados um serviço de recepção 24 horas e comodidades de lavandaria. Também está disponível um campo de voleibol de praia. Esta é a parte de Jericoacoara que os hóspedes preferem, de acordo com comentários independentes. Os casais gostam particularmente da localização — deram uma pontuação de 8,8 para uma viagem a dois.'}
   textodobotao={'Agendamento'}
   clicou={() => navigation.navigate ('Agendamento')}
   />
   </>

  );

};


export default Pousadapordosol;