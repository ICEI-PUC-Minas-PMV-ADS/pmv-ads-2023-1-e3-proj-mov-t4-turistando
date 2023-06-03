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
     texto = {'Começou a ser construída em 1765 e foi concluída em 1771. É considerada uma das mais importantes igrejas coloniais do país, pois reúne Aleijadinho, que fez o projeto, com mestre Ataíde, principal nome da pintura na época. A portada do frontispício também é obra de Aleijadinho. As curvas e contracurvas da fachada foram uma grande inovação na época. Note que as torres são recuadas em relação à fachada. Lindíssimo, não? Outro ponto inovador é que Aleijadinho obstruiu o óculo, aquela abertura que se tem na fachada, colocando em seu lugar uma obra esculpida.'}
     textodobotao = {'Agendamento'}
     clicou = {() => navigation.navigate ('Agendamento')}
     />
     </>
   );
};

export default Pedrarochosa;
