import *as React from 'react';
import {ScrollView} from 'react-native';

import Cabecalho from '../../components/Cabecalho';
import Bodypturisticos from '../../components/bodypturisticos';

import {useNavigation} from '@react-navigation/native';

const Teatroamazonas = () => {

  const navigation = useNavigation();

  return (
    <>
    <Cabecalho 
    title = {'Pontos Turísticos'}
    goBack= {() => navigation.goBack()}
    />
    
    <Bodypturisticos
    foto = {{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/74f855fb5b2331175642d1a9b649106d'}} 
     titulo = {'Teatro Amazonas'} 
     texto = {'O Teatro Amazonas é um dos mais importantes teatros do Brasil e o principal cartão-postal da cidade de Manaus. Localizado no Largo de São Sebastião, no Centro Histórico, foi inaugurado em 1896 para atender ao desejo da elite amazonense da época, que idealizava a cidade à altura dos grandes centros culturais.De estilo renascentista entorno de sua estrutura externa com os detalhes únicos na sua cúpula, tornou-se um dos monumentos mais conhecidos do Brasil e, consequentemente, o maior símbolo cultural de Manaus, e uma das expressões arquitetônicas responsáveis pela fama da cidade de Paris dos Trópicos. Por ser uma obra singular no país e representar o apogeu de Manaus durante o ciclo da borracha, foi tombado como Patrimônio Histórico Nacional pelo IPHAN em 1966. Está localizado mais precisamente na Avenida Eduardo Ribeiro e recebe cerca de 288 mil visitantes ao ano. Com uma decoração muito nobre, o Teatro Amazonas já foi palco não somente de grandes peças teatrais, mas também de shows internacionais como o da banda The White Stripes. Desde 1997, o Festival Amazonas de Ópera é realizado no teatro. Em 2008, o teatro foi eleito uma das sete maravilhas brasileiras em dois concursos promovidos pela Revista Caras em parceria com o banco HSBC e outro pelo escritório de design Goff. Em 2014, o TripAdvisor, considerado o maior site de viagens do mundo, elegeu o Teatro Amazonas a terceira melhor atração turística do Brasil. '}
     textodobotao = {'Agendamento'}
     clicou = {() => navigation.navigate ('Agendamento')}
     />
    </>
  );
    
};

export default Teatroamazonas;