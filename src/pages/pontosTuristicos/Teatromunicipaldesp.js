import *as React from 'react';
import {ScrollView} from 'react-native';

import Cabecalho from '../../components/Cabecalho';
import Bodypturisticos from '../../components/bodypturisticos';

import {useNavigation} from '@react-navigation/native';

const Teatromunicipaldesp = () => {

   const navigation = useNavigation();

  return (
    <>
    <Cabecalho 
    title = {'Pontos Turísticos'}
    goBack= {() => navigation.goBack()}
    />
    <Bodypturisticos
    foto = {{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/bacc79a26e1865cf14e87011e0c9f625'}} 
     titulo = {'Teatro Municipal de São Paulo'}
     texto = {'O Teatro Municipal de São Paulo é um teatro brasileiro localizado na cidade paulista de São Paulo, projetado pelos arquitetos Ramos de Azevedo, Claudio Rossi e Domiziano Rossi no estilo arquitetônico eclético, inspirado na Ópera de Paris e inaugurado em 1911. É um dos cartões postais da cidade, localizado na Praça Ramos de Azevedo, também considerado um dos mais importantes teatros do país. Construído para atender ao desejo da elite paulista da época, que queria que a cidade estivesse à altura dos grandes centros culturais.'}
     textodobotao = {'Agendamento'}
     clicou = {() => navigation.navigate ('Agendamento')}
     />
    </>
  );
    
};

export default Teatromunicipaldesp;