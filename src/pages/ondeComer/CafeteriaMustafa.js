import * as React from 'react';
import {ScrollView } from 'react-native';

import Cabecalho from '../../components/Cabecalho';
import BodyComer from '../../components/BodyEventos';

import {useNavigation} from '@react-navigation/native';


const Cafeteria = () => {

  const navigation = useNavigation();
  
  return (

    <>
    <Cabecalho 
    title={'Onde Comer'}
    goBack= {() => navigation.goBack()}
    /> 

<ScrollView>
    <BodyComer
           foto = {{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/fbc0ce297522e2de5ad04cddbd3f9f7a'}}
           nome = {'Cafeteria Mustafá'} 
           texto = {'Além do café excepcional, a Mustafá também oferece uma seleção de chás premium, acompanhados de deliciosas opções de doces finos e petiscos gourmet. Nossos bolos, tortas e sobremesas são preparados com ingredientes de alta qualidade, trazendo um toque de sofisticação ao seu momento de indulgência. Nossa equipe dedicada e atenciosa está comprometida em proporcionar um serviço impecável, garantindo que sua visita seja uma experiência memorável.'} 
           botao = {'Agendamento'}
           rota = {() => navigation.navigate ('Agendamento')}   
    />

</ScrollView>
    
    </>
  );

};

export default Cafeteria;