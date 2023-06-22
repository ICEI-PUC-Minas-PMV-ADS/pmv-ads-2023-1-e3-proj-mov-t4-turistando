import * as React from 'react';
import {ScrollView } from 'react-native';


import Cabecalho from '../../components/Cabecalho';
import Bodypturisticos from '../../components/bodypturisticos';

import {useNavigation} from '@react-navigation/native';

const Pedrarochosa = () => {

   const navigation = useNavigation();

   return (
     <>
     <Cabecalho 
    title = {'Pontos Turísticos'}
    goBack= {() => navigation.goBack()}
    />
     <Bodypturisticos 
     foto = {{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b02ffc24d2c210efd43437e230fa6247'}} 
     titulo = {'Pedra Rochosa - Jericoacoara'}
     texto = {'A Pedra Rochosa se destaca pela sua imponência e pelo contraste marcante entre suas rochas robustas e o mar cristalino que a rodeia. Seu cenário pitoresco oferece vistas panorâmicas deslumbrantes, especialmente durante o nascer e o pôr do sol, quando as cores vibrantes pintam o céu e refletem nas águas calmas. Seja para admirar a beleza natural, praticar esportes aquáticos ou simplesmente relaxar em um ambiente paradisíaco, a Pedra Rochosa é um destino imperdível em Jericoacoara. Venha explorar esse local encantador e desfrutar de momentos inesquecíveis cercado pela magnificência da natureza.'}
     textodobotao = {'Agendamento'}
     clicou = {() => navigation.navigate ('Agendamento')}
     />
     </>
   );
};

export default Pedrarochosa;
