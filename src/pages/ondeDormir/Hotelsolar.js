import * as React from 'react';
import {ScrollView} from 'react-native';


import Cabecalho from  '../../components/Cabecalho';
import Bodyondedormir from '../../components/bodypturisticos';

import {useNavigation} from '@react-navigation/native';

const Hotelsolar= () => {

const navigation = useNavigation ();

  return (
    <>
    <Cabecalho 
    title = {'Onde Dormir'}
    goBack = {() => navigation.goBack()}
    />
    <Bodyondedormir 
    foto={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/761ee652dcea59e412700fd3431c891a'}}

   titulo={'Hotel Solar Das Lajes'}
   texto={'Todos os quartos incluem comodidades modernas, como uma televisão LCD, um minibar, um telefone e uma casa de banho privativa. Alguns quartos também têm ar condicionado e vistas cénicas. Os hóspedes podem desfrutar de um generoso buffet de pequeno-almoço numa sala equipada com janelas arqueadas. O menu inclui especialidades regionais, como bolo de milho e pão de queijo. O alojamento apresenta um parque infantil, uma receção 24 horas, uma sauna e um terraço para banhos de sol. Uma área de relaxamento e um pátio com vista panorâmica da cidade também estão disponíveis.O Hotel Solar das Lajes está localizado a cerca de 800 metros da Praça Tiradentes e dos Museus da Inconfidência e do Aleijadinho. O aeroporto mais próximo é o Aeroporto de Belo Horizonte/Pampulha - Carlos Drummond de Andrade, a 76 km do Hotel Solar Das Lajes.'}
   textodobotao={'Agendamento'}
   clicou={() => navigation.navigate ('Agendamento')}
   />
   </>

  );

};


export default Hotelsolar;