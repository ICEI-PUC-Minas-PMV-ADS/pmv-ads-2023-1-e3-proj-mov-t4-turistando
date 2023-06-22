import * as React from 'react';
import {ScrollView } from 'react-native';

import Cabecalho from '../../components/Cabecalho';
import BodyPages from '../../components/BodyEventos';

import {useNavigation} from '@react-navigation/native';


const Farmacia = () => {

  const navigation = useNavigation();
  
  return (

    <>
    <Cabecalho 
    title={'Lojas'}
    goBack= {() => navigation.goBack()}
    /> 

<ScrollView>
    <BodyPages
           foto = {require ('../../assets/img/farmacia.jpg')}
           nome = {'Farmácia'} 
           texto = {'Encontre tudo o que você precisa para a sua saúde e bem-estar em nossa farmácia de confiança. Oferecemos uma ampla variedade de medicamentos, produtos de cuidados pessoais e itens de saúde, todos disponíveis com apenas alguns toques. Nossa equipe de farmacêuticos altamente qualificados está pronta para ajudá-lo, fornecendo informações e orientações especializadas. Além disso, você pode aproveitar nossos serviços convenientes, como entrega em domicílio e recargas automáticas de medicamentos. Confie em nós para cuidar da sua saúde com conveniência e excelência.'} 
           botao = {'Como Chegar'}
           rota = {() => navigation.navigate ('')}   
    />

</ScrollView>
    
    </>
  );

};

export default Farmacia;