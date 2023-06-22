import * as React from 'react';
import {ScrollView } from 'react-native';

import Cabecalho from '../../components/Cabecalho';
import BodyComer from '../../components/BodyEventos';

import {useNavigation} from '@react-navigation/native';

const Varanda = () => {

  const navigation = useNavigation();
  
  return (

    <>
    <Cabecalho 
    title={'Onde Comer'}
    goBack= {() => navigation.goBack()}    
    /> 

<ScrollView> 
    <BodyComer
           foto = {{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4dee9175415d5cd9d03001b55a5f1c14'}} 
           nome = {'Restaurante Varanda do Norte'}           
              
           texto = {'Na Varanda do Norte, você encontrará pratos autênticos da região, preparados com ingredientes frescos e locais. Nossa equipe de chefs talentosos combina técnicas tradicionais e inovações culinárias para criar sabores únicos e deliciosos. Desfrute de uma refeição deliciosa enquanto aprecia a vista magnífica que nos cerca. Seja para um almoço tranquilo ou um jantar romântico, a Varanda do Norte oferece um ambiente acolhedor e um atendimento caloroso, tornando sua experiência culinária verdadeiramente memorável.'}                               

           botao = {'Agendamento'}
           rota = {() => navigation.navigate ('Agendamento')}    
    />

</ScrollView>
    
    </>
  );

};

export default Varanda;