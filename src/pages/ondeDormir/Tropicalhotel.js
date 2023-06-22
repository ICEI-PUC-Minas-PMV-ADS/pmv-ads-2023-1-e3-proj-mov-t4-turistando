import * as React from'react';
import {ScrollView} from 'react-native';

import Cabecalho from '../../components/Cabecalho';
import Bodyondedormir from '../../components/bodypturisticos';

import {useNavigation} from '@react-navigation/native';


const Tropicalhotel= () => {

const navigation = useNavigation ();

  return (
    <>
    <Cabecalho 
    title = {'Onde Dormir'}
    goBack = {() => navigation.goBack()}/>
    <Bodyondedormir 
    foto={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/3ff512afb4ea9c09a48b05d7b12a65ca'}
   }
   

   titulo={'Espaço inteiro: flat '}
   texto={'O espaço Localizado na zona mais nobre de Manaus, Ponta Negra. Com vista privilegiada para a praia e o belíssimo Rio Negro. Acesso do hóspede. O Flat dispõe do Restaurante Maragogi com opções Regionais e Intern. Room service 24h. Limpeza diária básica, incluso na Diária. Serviço de lavanderia porém não está incluso.Outras observações. Tenho disponível passeios turísticos de lancha para os meus hospedes. Como visitas nas tribos indígenas, encontro das águas, mergulhos com os botos Rosa'}
   textodobotao={'Agendamento'}
   clicou={() => navigation.navigate ('Agendamento')}
   />
   </>

  );

};


export default Tropicalhotel;