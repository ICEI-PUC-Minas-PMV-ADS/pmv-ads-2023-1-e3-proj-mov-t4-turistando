import * as React from 'react';
import {ScrollView } from 'react-native';


import Cabecalho from '../../components/Cabecalho';
import Bodypturisticos from '../../components/bodypturisticos';

import {useNavigation} from '@react-navigation/native';

const Igrejasaofrancisco = () => {

   const navigation = useNavigation();

   return (
    <>
     <Cabecalho 
    title = {'Pontos Turísticos'}
    goBack= {() => navigation.goBack()}
    />
      <Bodypturisticos 
      foto = {{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/13a847dddf5314aa0881a8e945ae0ec1'}} 
      titulo = {'Igreja de São Francisco de Assis - Ouro Preto'}
      texto = {'Começou a ser construída em 1765 e foi concluída em 1771. É considerada uma das mais importantes igrejas coloniais do país, pois reúne Aleijadinho, que fez o projeto, com mestre Ataíde, principal nome da pintura na época. As curvas e contracurvas da fachada foram uma grande inovação na época. Note que as torres são recuadas em relação à fachada. Lindíssimo, não? Outro ponto inovador é que Aleijadinho obstruiu o óculo, aquela abertura que se tem na fachada, colocando em seu lugar uma obra esculpida. '}
      textodobotao = {'Agendamento'}
      clicou = {() => navigation.navigate ('Agendamento')}
   />
   </>
   );
};

export default Igrejasaofrancisco; 