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
              
           texto = {'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.'}                               

           botao = {'Agendamento'}
           rota = {() => navigation.navigate ('Agendamento')}    
    />

</ScrollView>
    
    </>
  );

};

export default Varanda;