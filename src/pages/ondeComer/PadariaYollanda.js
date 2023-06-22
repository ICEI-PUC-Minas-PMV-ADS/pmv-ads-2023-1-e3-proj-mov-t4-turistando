import * as React from 'react';
import {ScrollView } from 'react-native';

import Cabecalho from '../../components/Cabecalho';
import BodyComer from '../../components/BodyEventos';

import {useNavigation} from '@react-navigation/native';

const Padaria = () => {

  const navigation = useNavigation();
  
  return (

    <>
    <Cabecalho 
    title={'Onde Comer'}
    goBack= {() => navigation.goBack()}
    /> 

<ScrollView>
    <BodyComer
           foto = {{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ebc7e42a0cb7bb09d8a7de103a08f967'}}
           nome = {'Padaria Yollanda'} 
           texto = {'Além da incrível variedade de produtos assados, a Yollanda oferece um ambiente encantador para desfrutar de suas guloseimas. Nossos espaços aconchegantes convidam você a relaxar e apreciar uma xícara de café fresco enquanto saboreia seus favoritos. A padaria Yollanda também é conhecida por sua abordagem artesanal e ingredientes de alta qualidade. Utilizamos apenas os melhores ingredientes, incluindo produtos locais e orgânicos sempre que possível, para garantir sabores autênticos e frescos em cada mordida.'} 
           botao = {'Agendamento'}
           rota = {() => navigation.navigate ('Agendamento')}      
    />

</ScrollView>
    
    </>
  );

};

export default Padaria;